import { useState } from "react";
import "./App.css";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [huessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return (
    <div className="!max-w-[800px] !mx-auto !bg-blue-400 flex flex-col gap-[2rem] items-center">
      <h1 className="text-red-400">Hangman Word Game</h1>

      <div className="text-[2rem] text-center">Lose Win</div>
    </div>
  );
}

export default App;
