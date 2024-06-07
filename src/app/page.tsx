"use client";

import BottomBlock from "./blocks/bottom-block";
import ButtonBlock from "./blocks/button-block";
import SearchBlock from "./blocks/search-block";
import SideBlock from "./blocks/side-block";
import TextBlock from "./blocks/text-block";
import DaysBlock from "./blocks/days-block";
import ChartBlock from "./blocks/chart-block";
import { useAppSelector } from "@/lib/store/store";
import { useEffect, useState } from "react";

export default function Home() {
  const single = useAppSelector((state) => state.loc.values.singleMode);
  const [backgroundImage, setBackgroundImage] = useState("./img/sky-bg.jpg");

  const cityName = useAppSelector((state) => state.curDay.name);
  const unsplashAccessKey = "E0oKcPW4cApaHHWBY_5ebYa22BpqpIE8PhXpXqRsJis";

  useEffect(() => {
    const apiUrl = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${unsplashAccessKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        return response.json();
      })
      .then((data) => {
        const imageUrl = data.results[0]?.urls?.regular;
        if (imageUrl) {
          setBackgroundImage(imageUrl);
        } else {
          throw new Error("No image found");
        }
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        setBackgroundImage("./img/sky-bg.jpg");
      });
  });

  return (
    <div
      className="bg-slate-200 h-screen bg-cover bg-fixed overflow-y-scroll transition-all ease-in duration-300"
      style={{
        backgroundImage: `linear-gradient(180deg, #10213630, #102136a1), url(${backgroundImage})`,
      }}
    >
      <SearchBlock />
      <ButtonBlock mode={single} />
      {single && <SideBlock />}
      {single && <BottomBlock />}
      {single && <TextBlock />}
      {!single && <DaysBlock />}
      {!single && <ChartBlock />}
    </div>
  );
}
