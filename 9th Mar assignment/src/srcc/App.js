import React, { useState } from "react";

function App() {

  const [mood, setMood] = useState("😊");

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>

      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <button onClick={() => setMood("😊 Happy")}>Happy</button>
      <button onClick={() => setMood("😢 Sad")}>Sad</button>
      <button onClick={() => setMood("😡 Angry")}>Angry</button>
      <button onClick={() => setMood("😴 Tired")}>Tired</button>

    </div>
  );
}

export default App;