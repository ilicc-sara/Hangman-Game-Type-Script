import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [huessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return (
    <div className="!max-w-[800px] !mx-auto flex flex-col gap-[2rem] items-center">
      <h1>Hangman Word Game</h1>

      <div className="text-[2rem] text-center">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
