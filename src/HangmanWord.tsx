type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  // const word = "test";
  // const guessedLetters = ["t", "e"];
  return (
    <div className="flex gap-[.25em] text-[6rem] font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          className="border-b-[0.1em] border-b-solid border-b-black"
        >
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible"
            }  ${
              !guessedLetters.includes(letter) && reveal
                ? "text-red-500"
                : "text-black"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
