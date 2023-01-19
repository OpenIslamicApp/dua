import React from "react";
import styled from "styled-components";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Footer({ appInfoModal }) {
  return (
    <Container>
      By <a href="https://github.com/OpenIslamicApp/">OpenIslamicApp</a>,{" "}
      <a href="https://ahjim.com">Akhlak Hossain Jim</a>, and{" "}
      <a href="https://github.com/OpenIslamicApp/dua/graphs/contributors">
        contributors.
      </a>
      <br />
      Report a{" "}
      <a href="https://github.com/OpenIslamicApp/dua/issues">problem</a> or{" "}
      <a href="https://github.com/OpenIslamicApp/dua/">contribute</a>.{" "}
      <span onClick={() => appInfoModal(true)}>
        <BsFillInfoCircleFill />
      </span>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: var(--color-gray);
  background-color: var(--bg-sec);
  font-size: calc(2px + 2vmin);
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    left: 0;
    right: 0;
  }
  a,
  span {
    color: var(--color-th);
    text-decoration: none;
    cursor: pointer;
  }
`;
