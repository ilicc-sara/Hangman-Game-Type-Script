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
    <>
      <h1 className="text-red-400">Hangman Word Game</h1>
    </>
  );
}

export default App;
