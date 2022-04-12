import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  border-radius: 7px;
  padding: 2rem;
  margin: 3rem;
  cursor: pointer;
  background-color: #000;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  width: 30%;

  @media (max-width: 768px) {
    width: 70%;
    align-self: center;
  }
`;

export const CardTitle = styled.div`
  font-size: 1.2rem;
  height: auto;
  width: auto;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const ReturnButton = styled.button`
  margin-top: 2rem;
  justify-self: center;
  width: 50%;
  align-self: center;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionIcon = styled.div`
position: absolute;
`