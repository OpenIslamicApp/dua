import React from "react";
import DUA from "./DUA";

export default function Body({ language, country, state }) {
  return (
    <>
      <h1 style={{ margin: "38px 0" }}>Dua's:</h1>
      <DUA />
    </>
  );
}
