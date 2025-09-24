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

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  console.log(wordToGuess);
  return (
    <div className="!mb-[2rem] !max-w-[800px] !mx-auto flex flex-col gap-[2rem] items-center">
      <h1>Hangman Word Game</h1>

      <div className="text-[2rem] text-center">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord />
      <div className="self-stretch">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
