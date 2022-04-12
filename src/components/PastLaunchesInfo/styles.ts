import styled from "styled-components";

export const PastInfoContainer = styled.div`
  position: absolute;
  width: 25%;
  height: 80%;
  right: 0;
  background-color: #000;
  align-self: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  overflow: scroll;
  overflow-x: hidden;

  @media (max-width: 768px) {
    min-height: 50%;
    margin-top: 2rem;
    overflow: scroll;
    opacity: 1;
    width: 80%;
  }
`;

export const PastInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const PastDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: space-between;
`;

export const Photos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  align-items: center;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > img {
    margin-top: 2rem;
    margin-left: 1rem;
    width: 90%;
  }
`;

export const PreviousIcon = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  align-self: center;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: #333333bb;
  cursor: pointer;
  margin-top: 2rem;
  transition: 0.2s;

  &:hover {
    background-color: #333333;
  }
`;

export const NextIcon = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  align-self: center;
  position: absolute;
  z-index: 2;
  margin-left: 80%;
  justify-content: center;
  align-items: center;
  background-color: #333333bb;
  cursor: pointer;
  margin-top: 2rem;
  transition: 0.2s;

  &:hover {
    background-color: #333333;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  left: 1.5rem;
  scale: 1.5;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #ff0000;
  }
`;
