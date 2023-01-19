import React, { useState } from "react";
import styled from "styled-components";

export default function ButtonDua({ arabic, english, times }) {
  const [Counter, setCounter] = useState(0);

  //   const audio = new Audio("/error.mp3");

  const handleCount = () => {
    setCounter(Counter + 1);
    navigator.vibrate(50);
  };
  return (
    <Container
      className="duaButton_container"
      role="button"
      onClick={handleCount}
    >
      <div className="duaButton_container__num">
        <h2>
          <span>
            {Counter < 10 ? "0" : ""}
            {Counter}
          </span>
          {times && times !== 0 ? times : <i>/&infin;</i>}
        </h2>
      </div>
      <div className="duaButton_container__text">
        <h1 dir="rtl">{arabic}</h1>
        <sub>{english} </sub>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--color-th);
  color: var(--bg-sec);
  box-shadow: var(--bg-sec-shadow);
  border-radius: 20px;
  padding: 20px;
  position: relative;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .duaButton_container {
    &__text {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 6px;
      & > h1 {
        text-align: center;
        font-size: calc(30px + 2vmin);
      }
      & > h3,
      & > sub {
        font-size: calc(6px + 2vmin);
        font-weight: 600;
      }
    }
    &__num {
      position: sticky;
      position: sticky;
      top: 20px;
      left: 0;
      border-radius: 20px;
      padding: 0 18px 18px 0;
      display: flex;
      & > * {
        display: flex;
        flex-direction: column;
        & > span {
          font-size: calc(24px + 2vmin);
        }
        font-size: calc(10px + 2vmin);
        text-align: center;
        font-weight: 800;
        margin: auto;
      }
    }
  }
`;
