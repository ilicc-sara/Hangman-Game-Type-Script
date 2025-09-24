import React from "react";

const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-[10px] border-solid border-black absolute top-[50px] -right-[20px]"></div>
);

const BODY = (
  <div className="w-[10px] h-[100px] bg-black absolute top-[100px] right-0"></div>
);

const RIGHT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] -right-[92px] origin-bottom-left transform -rotate-[30deg] rounded-full"></div>
);

const LEFT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[2px] origin-bottom-right transform rotate-[30deg] rounded-full"></div>
);

const RIGHT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[190px] -right-[92px] origin-bottom-left transform rotate-[60deg] rounded-full"></div>
);

const LEFT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[190px] right-[2px] origin-bottom-right transform -rotate-[60deg] rounded-full"></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0"></div>
      <div className="h-[10px] w-[200px] bg-black !ml-[120px]"></div>
      <div className="h-[400px] w-[10px] bg-black !ml-[120px]"></div>
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}

export default HangmanDrawing;
