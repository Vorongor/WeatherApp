"use client";

import React from "react";
import Notiflix from "notiflix";
import Button from "./button";
import LocationIcon from "@/icons/location";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store/store";
import { setLocation } from "@/lib/store/features/location-slice";
import { getDay } from "@/lib/store/features/operations";

export default function LocationButton() {
  const dispatch = useDispatch<AppDispatch>();

  const API = "88844cf48cee64210e6fc18e7624c982";

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      Notiflix.Confirm.show(
        "Geolocation Request",
        "Allow access to your geolocation?",
        "Yes, Allow",
        "No, Deny",
        function () {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              dispatch(setLocation({ latitude, longitude }));
              dispatch(getDay({ lat: latitude, lon: longitude, API }));
            },
            (error) => {
              Notiflix.Notify.failure(
                `Error obtaining geolocation: ${error.message}`
              );
            }
          );
        },
        function () {
          Notiflix.Notify.warning("You denied geolocation access");
        }
      );
    }
  };
  return (
    <Button clickFunc={() => handleGetLocation()}>
      <LocationIcon />
    </Button>
  );
}
