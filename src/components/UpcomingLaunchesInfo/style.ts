import styled from "styled-components";

export const UpcomingInfoContainer = styled.div`
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

  @media (max-width: 768px) {
    width: 70%;
    min-height: 50%;
    position: absolute;
    margin-top: 2rem;
    overflow: scroll;
    opacity: 1;
  }
`;

export const UpcomingInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const UpcomingDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  justify-content: space-between;
`;
