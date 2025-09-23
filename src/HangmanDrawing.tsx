import React from "react";

const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-[10px] border-solid border-black absolute top-[50px] -right-[20px]"></div>
);

const BODY = (
  <div className="w-[10px] h-[100px] bg-black absolute top-[100px] right-0"></div>
);

function HangmanDrawing() {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0"></div>
      <div className="h-[10px] w-[200px] bg-black !ml-[120px]"></div>
      <div className="h-[400px] w-[10px] bg-black !ml-[120px]"></div>
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}

export default HangmanDrawing;
