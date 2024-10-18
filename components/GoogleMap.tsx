"use client";
import React, {useEffect, useRef} from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const userLocation: google.maps.LatLngLiteral = {
      lat: 0,
      lng: 0,
    };
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        userLocation.lat = latitude;
        userLocation.lng = longitude;
      });
    }

    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "quarterly",
      });
      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const centerLocation: google.maps.LatLngLiteral = {
        lat: 34.0138,
        lng: -118.4405,
      };

      const mapOptions: google.maps.MapOptions = {
        center: centerLocation,
        zoom: 8,
        mapId: "671ef45b8dfa60c9",
        disableDefaultUI: true,
        scaleControl: false,
        zoomControl: false,
        cameraControl: false,
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const userMarker = new AdvancedMarkerElement({
        map,
        position: userLocation,
      });
      const centerMarker = new AdvancedMarkerElement({
        map,
        position: centerLocation,
      });

      const markers: Array<google.maps.marker.AdvancedMarkerElement> = []; //some array;
      markers.push(userMarker);
      markers.push(centerMarker);

      const bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < markers.length; i++) {
        bounds.extend(markers[i].position as google.maps.LatLngLiteral);
      }

      map.fitBounds(bounds);
    };
    initMap();
  }, []);

  return <div ref={mapRef} className="w-full h-[40vh] pointer-events-none" />;
};

export default GoogleMap;
