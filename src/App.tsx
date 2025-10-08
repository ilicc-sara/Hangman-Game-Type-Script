import { useState, useEffect } from "react";
import "./App.css";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      console.log(key);

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, isWinner, isLoser]);

  console.log(wordToGuess);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#f7dcff] to-[#fff9d8] !mb-0">
      <div className="!mb-[2rem] !max-w-[800px] !mx-auto flex flex-col gap-[2rem] items-center ">
        <div className="text-center text-lg text-gray-600 mb-4">
          Attempts left: {6 - incorrectLetters.length}
        </div>
        {(isWinner || isLoser) && (
          <button
            onClick={() => {
              setWordToGuess(getWord());
              setGuessedLetters([]);
            }}
            className="!mt-4 !px-4 !py-2 rounded bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
          >
            Restart Game
          </button>
        )}
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide text-center">
          Hangman Word Game
        </h1>

        <div
          className={`text-2xl font-semibold text-center ${
            isWinner
              ? "text-green-600"
              : isLoser
              ? "text-red-600"
              : "text-gray-700"
          }`}
        >
          {isWinner && "Winner! 🎉 Press Enter key to try again!"}
          {isLoser && "Nice try 😅 Press Enter key to try again"}
        </div>

        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />

        <div className="self-stretch">
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
