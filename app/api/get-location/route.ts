import { NextRequest, NextResponse } from 'next/server';

// Utility function to get the IP address
const getIpAddress: (req: NextRequest) => Promise<google.maps.LatLngLiteral> = async (req: NextRequest) => {
    // The 'x-forwarded-for' header is a common way to get the real IP when behind a proxy
    const xForwardedFor = req.headers.get('x-forwarded-for');
    const userLocation: google.maps.LatLngLiteral = {
        lat: -999,
        lng: -999
    }
    if (xForwardedFor) {
        let userIP
        // The x-forwarded-for header can contain multiple IPs (comma-separated), get the first one
        userIP = xForwardedFor.split(',')[0].trim()
        if (userIP.substring(0, 7) == "::ffff:") {
            userIP = xForwardedFor.substring(7)
        }
        console.log(userIP)
        const locationData = await fetch(`http://ip-api.com/json/${userIP}`).then(res => res.json()).catch(error => console.error(error))
        if (locationData.status === "success") {
            userLocation.lat = locationData.lat
            userLocation.lng = locationData.lon
        }
    }

    return userLocation;;
};

export async function GET(req: NextRequest) {
    const location = await getIpAddress(req);
    return NextResponse.json({ location: location });
}