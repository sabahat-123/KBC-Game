import React, { useRef } from "react";

function Start({  setName, setTimeOut }) {
    const inputRef = useRef();

    const handleClick = () => {
      setTimeOut(false);
      inputRef.current.value && setName(inputRef.current.value);
    };
  return (
    <div className="main-start">
    <div className="input-div"> 
        <h1> Welcome to Koun Banega Ameer (KBA) 💰</h1>
      <div className="start">
      
        <input
          placeholder="Enter your Name" 
          className="startInput"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          Start Game
        </button>
      </div>
      </div>
      <div className="instruction">
        <h3>Instructions and rules for playing this game</h3>
        <ol type="number">
          <li>This is Quiz app.</li>
          <li>In this, User is entroll your name .</li>
          <li>User name is shown on main Screen .</li>
          <li>This app is having 17 questions .</li>
          <li>Each question having 4 answers .</li>
          <li>On click answer it take 5 second for validation of <br/> answer is correct/wrong .</li>
          <li>Timing of giving answer is 30 second .</li>
          <li>There is quit option for quit that game <br></br>if you don't know answer .</li>
          <li>There is exit option for exit that game .</li>
        </ol>
      </div>
    </div>
  );
}

export default Start;