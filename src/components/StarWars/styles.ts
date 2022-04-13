import { keyframes } from "styled-components";
import styled from "styled-components";

const play = keyframes`
  0% {
    transform: rotateX(21deg) translate3d(0, 100vh, 0);
    opacity: 1;
  }
  5% {
    transform: rotateX(21deg) translate3d(0, -500vh, 0);
    opacity: 1;
  }

  99% {
    opacity: 1;
  }

  100% {
    transform: rotateX(21deg) translate3d(0, -50rem, 0);
    opacity: 0;
  }
`;

export const StarWarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffbe00;
  line-height: 1.3;
  overflow: hidden;
  position: absolute;
  align-items: center;
  perspective: 500px;
  perspective-origin: bottom;
  top: 0;
  left: 0;
  right: 0;
  transform: scaleY(0.9);
  height: 100%;
`;

export const StarWarsText = styled.div`
  display: flex;
  font-size: 3rem;
  text-align: center;
  flex-direction: column;
  top: 0;
  left: 13%;
  right: 13%;
  height: 100%;
  animation: ${play} 3000s infinite;
  width: 80%;

  > a {
    color: #ffbe00;
  }

  > button {
    margin-top: 1rem;
    width: 25%;
    height: 5rem;
    align-self: center;
    background-color: transparent;
    color: #ffbe00;
    border: 2px solid #ffbe00;
    border-radius: 7px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #ffbe00;
      color: #000;
    }
  }
`;

export const SkipButton = styled.button`
  position: absolute;
  z-index: 2;
  left: 20px;
  width: 6rem;
  height: 2rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.3;

  &:hover {
    border: 1px solid #ffbe00;
    background-color: #ffbe00;
    color: #000;
    opacity: 1;
  }
`;

export const FirstIntro = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const BlueText = styled.div`
  color: #00bfff;
  font-size: 2rem;
`;
