import React from "react";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Keyboard() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-[.5rem]">
      {KEYS.map((key) => {
        return <button key={key}>{key}</button>;
      })}
    </div>
  );
}

export default Keyboard;
