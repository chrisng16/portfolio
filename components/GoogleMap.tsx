"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useTheme } from "next-themes";

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

      const myLocation: google.maps.LatLngLiteral = {
        lat: 34.0138,
        lng: -118.4405,
      };

      const mapOptions: google.maps.MapOptions = {
        center: myLocation,
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
        "-top-3 bg-zinc-200/70 ring-2 ring-zinc-200 rounded-lg py-1 px-4 mb-2 text-lg relative text-black";
      userMarkerContent.textContent = "you";
      const userMarker = new AdvancedMarkerElement({
        map,
        position: userLocation as google.maps.LatLngLiteral,
        title: "you",
        content: userMarkerContent,
      });

      const myMarkerContent = document.createElement("div");
      myMarkerContent.className =
        "-top-3 bg-zinc-200/70 ring-2 ring-zinc-200 rounded-lg py-1 px-4 mb-2 text-lg relative text-black";
      myMarkerContent.textContent = "me";

      const myMarker = new AdvancedMarkerElement({
        map,
        position: myLocation,
        title: "me",
        content: myMarkerContent,
      });

      const markers: Array<google.maps.marker.AdvancedMarkerElement> = []; //some array;
      markers.push(userMarker);
      markers.push(myMarker);

      const line = new google.maps.Polyline({
        path: [userLocation, myLocation],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      line.setMap(map);

      const bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < markers.length; i++) {
        bounds.extend(markers[i].position as google.maps.LatLngLiteral);
      }

      map.fitBounds(bounds);
    };
    if (userLocation !== null) initMap();
  }, [userLocation]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[40vh] pointer-events-none rounded-xl hue-rotate-180 invert dark:hue-rotate-0 dark:invert-0"
    />
  );
};

export default GoogleMap;
