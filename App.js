import React, { useState } from "react";
import Itemlist from "./components/itemlist.jsx";
import Itempage from "./components/itempage.jsx";
import bluePho from "./assets/blue.png";
import greenPho from "./assets/green.png";
import pinkPho from "./assets/pink.png";
import redPho from "./assets/red.png";

export default function App() {
  const [state] = useState({
    items: [
      {
        itemName: "Bike Jacket Softshell Warm",
        rating: 4,
        price: "$99",
        itemPicture: bluePho,
      },
      {
        itemName: "Pink Hoody Merino",
        rating: 3,
        price: "$80",
        itemPicture: pinkPho,
      },
      {
        itemName: "Hooded Jacket Classic",
        rating: 5,
        price: "$140",
        itemPicture: greenPho,
      },
      {
        itemName: "Red Woman Jacket",
        rating: 4,
        price: "$115",
        itemPicture: redPho,
      },
    ],
  });
  return (
    <>
      <Itemlist state={state} />
      {/* <Itempage state={state} /> */}
    </>
  );
}
