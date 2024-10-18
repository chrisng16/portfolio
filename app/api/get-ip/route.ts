import { NextRequest, NextResponse } from 'next/server';

// Utility function to get the IP address
const getIpAddress = (req: NextRequest): string | null => {
    // The 'x-forwarded-for' header is a common way to get the real IP when behind a proxy
    const xForwardedFor = req.headers.get('x-forwarded-for');
    let userIP
    if (xForwardedFor) {
        // The x-forwarded-for header can contain multiple IPs (comma-separated), get the first one
        userIP = xForwardedFor.split(',')[0].trim()
        if (userIP.substring(0, 7) == "::ffff:") {
            userIP = xForwardedFor.substring(7)
        }

        console.log(userIP)

        return userIP;
    }

    // Fallback to `req.ip` if no 'x-forwarded-for' header exists (depends on the environment)
    return req.ip || null;
};

export async function GET(req: NextRequest) {
    const ipAddress = getIpAddress(req);

    return NextResponse.json({ ip: ipAddress });
}