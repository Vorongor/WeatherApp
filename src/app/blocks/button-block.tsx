"use client";
import React, { useState } from "react";
import Button from "../components/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store/store";
import { setMode } from "@/lib/store/features/location-slice";

export interface ButtonBlockProps {
  mode: boolean;
}

export default function ButtonBlock({ mode }: ButtonBlockProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [single, setSingle] = useState(true);

  function togleMode(): void {
    setSingle(!single);
    dispatch(setMode(!single));
  }
  return (
    <div className="mr-0 ml-auto my-4 top-[60%] flex flex-row justify-evenly w-[395px]">
      <Button clickFunc={togleMode} disabled={mode}>
        <p className="w-[182px] h-[27px] py-0 px-3 bg-[#ffffff] rounded-[12px]">
          TODAY
        </p>
      </Button>
      <Button clickFunc={togleMode} disabled={!mode}>
        <p className="w-[182px] h-[27px] py-0 px-3 bg-[#ffffff] rounded-[12px]">
          5 DAYS
        </p>
      </Button>
    </div>
  );
}
