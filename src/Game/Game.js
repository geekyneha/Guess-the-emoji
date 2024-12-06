import React, { useState } from "react";
import styles from "./game.module.css"; 

function GuessTheEmoji() {

  const [guess,setGuess]=useState("");
  const [currentQues,setCurrentQues]=useState(0);
  const [message,setMessage]=useState("Best Of Luck");
  const [score,setScore]=useState(0);
  
  const emojisGuess = [
    { emojis: "🍟🍔", answer: "Fast food" },
    { emojis: "🌮🌯", answer: "Mexican food" },
    { emojis: "🍎🍇", answer: "Fruits" },
    { emojis: "🎅🎄", answer: "Christmas" },
    { emojis: "🐶🐱", answer: "Pets" },
    { emojis: "✈️🏖️", answer: "Vacation" },
    { emojis: "📖🖊️", answer: "Writing" },
    { emojis: "⚽🏀", answer: "Sports" },
    { emojis: "🍩☕", answer: "Breakfast" },
    { emojis: "🎶🎤", answer: "Music" },
    { emojis: "🚴‍♂️🏃‍♀️", answer: "Exercise" },
    { emojis: "🦁🐯", answer: "Wild animals" },
    { emojis: "🛏️🌙", answer: "Sleep" },
  ];
  const handleSubmit=()=>{
    if(guess.trim().toLocaleLowerCase()===emojisGuess[currentQues].answer.toLocaleLowerCase()){
      setScore(score+1);
      setMessage("wooho! You guessed it right.");
      setCurrentQues((prev)=>(prev+1) % emojisGuess.length);
      setGuess("");
      
    }
    else{
     
      setMessage("Oops! Correct answer: " + emojisGuess[currentQues].answer);
      setCurrentQues(0);
      setGuess("")

    }
  }
  return (
    <div className={styles.emojiGame}>
      <h1>Guess the Emoji</h1>
      <div className={styles.emojiDisplay}>{emojisGuess[currentQues].emojis}</div>
      <input
        type="text"
        name="guess"
        id="guess"
        className={styles.userGuess}
        placeholder="Type your guess..."
        value={guess}
        onChange={(e)=>setGuess(e.target.value)}
      />
      <button className={styles.submitBtn} onClick={handleSubmit}>Submit</button>
      <div className={styles["message"]}>{message}</div>
      <div className={styles.score}>Score:{score}</div>
    </div>
  );
}

export default GuessTheEmoji;
