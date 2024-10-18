"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({
  userLocation,
}: {
  userLocation: google.maps.LatLngLiteral;
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // const userLocation: google.maps.LatLngLiteral = userLocation;
    // if ("geolocation" in navigator) {
    //   // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
    //   navigator.geolocation.getCurrentPosition(({ coords }) => {
    //     const { latitude, longitude } = coords;
    //     userLocation.lat = latitude;
    //     userLocation.lng = longitude;
    //   });
    // }

    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "quarterly",
      });
      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const centerLoc: google.maps.LatLngLiteral = {
        lat: 34.0138,
        lng: -118.4405,
      };

      const mapOptions: google.maps.MapOptions = {
        center: centerLoc,
        zoom: 8,
        mapId: "671ef45b8dfa60c9",
        disableDefaultUI: true,
        scaleControl: false,
        zoomControl: false,
        cameraControl: false,
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const userMarkerContent = document.createElement("div");
      userMarkerContent.className =
        "bg-white rounded-lg py-2 px-4 mb-2 text-lg relative text-black after:absolute after:-translate-x-1/2 after:translate-y-0 after:w-0 after:h-0 after:border-t-8 after:border-t-white after:border-x-8 after:border-x-transparent after:border-solid after:left-1/2 after:top-full";
      userMarkerContent.textContent = "you";
      const userMarker = new AdvancedMarkerElement({
        map,
        position: userLocation as google.maps.LatLngLiteral,
        title: "you",
        content: userMarkerContent,
      });

      const myMarkerContent = document.createElement("div");
      myMarkerContent.className =
        "bg-white rounded-lg py-2 px-4 mb-2 text-lg relative text-black after:absolute after:-translate-x-1/2 after:translate-y-0 after:w-0 after:h-0 after:border-t-8 after:border-t-white after:border-x-8 after:border-x-transparent after:border-solid after:left-1/2 after:top-full";
      myMarkerContent.textContent = "me";

      const myMarker = new AdvancedMarkerElement({
        map,
        position: centerLoc,
        title: "me",
        content: myMarkerContent,
      });

      const markers: Array<google.maps.marker.AdvancedMarkerElement> = []; //some array;
      markers.push(userMarker);
      markers.push(myMarker);

      const bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < markers.length; i++) {
        bounds.extend(markers[i].position as google.maps.LatLngLiteral);
      }

      map.fitBounds(bounds);
    };
    if (userLocation !== null) initMap();
  }, [userLocation]);

  return <div ref={mapRef} className="w-full h-[40vh] pointer-events-none" />;
};

export default GoogleMap;
