import React, { useState } from "react";

export default function DuaWithAButton({ data, language }) {
  const [Counter, setCounter] = useState(0);

  const audio = new Audio("/error.mp3");

  const handleCount = () => {
    if (data.times !== 0) {
      if (Number(data.times) - 1 === Counter) {
        audio.play();
      }
      if (Number(data.times) > Counter) {
        setCounter(Counter + 1);
        navigator.vibrate(50);
      } else {
        audio.play();
        navigator.vibrate(300);
      }
    } else {
      setCounter(Counter + 1);
      navigator.vibrate(50);
    }
  };
  return (
    <div className="dua_container">
      <div className="dua_container__text">
        <h1 dir="rtl">{data.arabic}</h1>
        <sub>{data[language]} </sub>
      </div>
      <div className="dua_container__num" role="button" onClick={handleCount}>
        <h2>
          <span>
            {Counter < 10 ? "0" : ""}
            {Counter}
          </span>
          /{data.times && data.times !== 0 ? data.times : <i>&infin;</i>}
        </h2>
      </div>
    </div>
  );
}
