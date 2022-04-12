import styled from "styled-components";

export const RocketInfoContainer = styled.div`
  position: absolute;
  width: 20%;
  min-height: 80%;
  right: 0;
  background-color: #000;
  align-self: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;

  @media (max-width: 768px) {
    width: 70%;
    min-height: 50%;
    position: relative;
    margin-top: 2rem;
    overflow: scroll;
  }
`;

export const RocketInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const RocketDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: space-between;
`;
