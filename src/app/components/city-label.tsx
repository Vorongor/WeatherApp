import React from "react";
import Button from "./button";
import CrossIcon from "@/icons/cros";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store/store";
import { deleteCity } from "@/lib/store/features/location-slice";
import { getDayByCity } from "@/lib/store/features/operations";

export interface CityLabelProps {
  city: string;
}

export default function CityLabel({ city }: CityLabelProps) {
  const API = "88844cf48cee64210e6fc18e7624c982";
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteLabel = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatch(deleteCity(city));
  };

  const handleGetSaved = (query: string) => {
    dispatch(getDayByCity({ city: query, API }));
  };
  return (
    <div
      onClick={() => handleGetSaved(city)}
      className="inline-flex h-7 px-3 cursor-pointer justify-end items-center gap-2 flex-shrink-0 rounded-3xl bg-slate-500 opacity-65"
    >
      <p className="text-white underline leading-loose">{city}</p>
      <button onClick={(e) => handleDeleteLabel(e)}>
        <CrossIcon />
      </button>
    </div>
  );
}
