import React from "react";

function HangmanWord() {
  const word = "test";
  return (
    <div className="flex gap-[.25em] text-[6rem] font-bold uppercase font-mono">
      {word.split("").map((letter, index) => (
        <span className="border-b-[0.1em] border-b-solid border-b-black">
          <span className="invisible">{letter}</span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
