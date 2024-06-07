"use client";

import React from "react";

export interface SearchInputProps {
  query: string;
  handleChange: (value: string) => void;
  keyPress: (event: any) => void;
}

export default function SearchInput({
  query,
  handleChange,
  keyPress,
}: SearchInputProps) {
  return (
    <input
      value={query}
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      onKeyDown={(e) => keyPress(e)}
      className="px-16 py-6 w-full h-12 flex-shrink-0 rounded-full bg-white text-black placeholder:text-black"
      placeholder="Enter the city"
    />
  );
}
