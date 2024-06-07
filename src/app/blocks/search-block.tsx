"use client";

import React from "react";
import { useState } from "react";
import SearchInput from "../components/search-input";
import Button from "../components/button";
import StarIcon from "@/icons/star-icon";
import LocationButton from "../components/location-button";
import { AppDispatch, useAppSelector } from "@/lib/store/store";
import { useDispatch } from "react-redux";
import { getDayByCity } from "@/lib/store/features/operations";
import LabelSlider from "../components/label-slider";

export default function SearchBlock() {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState("");
  const API = "88844cf48cee64210e6fc18e7624c982";

  const cities = useAppSelector((state) => state.loc.values.savedLocation);

  function handleChange(city: string) {
    setQuery(city);
  }

  const handleAddLabel = (): void => {
    if (query !== "") {
      dispatch(getDayByCity({ city: query, API }));
      setQuery("");
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && query !== "") {
      dispatch(getDayByCity({ city: query, API }));
      handleChange("");
    }
  };

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="relative">
        <span className="absolute top-3 left-5 z-10">
          <LocationButton />
        </span>
        <SearchInput
          query={query}
          handleChange={handleChange}
          keyPress={handleKeyPress}
        />
        <span className="absolute top-3 right-5 z-10">
          <Button clickFunc={handleAddLabel}>
            <StarIcon />
          </Button>
        </span>
      </div>
      {cities.length > 0 && (
        <LabelSlider
          list={cities}
          // delFunc={handleDeleteLabel}
          // chooseFunc={handleGetSaved}
        />
      )}
    </div>
  );
}
