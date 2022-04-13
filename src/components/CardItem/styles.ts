import styled from "styled-components";

export const CardMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 3rem;
  align-items: center;
  margin-top: 10px;
  transition: 0.5s;
  border-radius: 5px;
  text-align: center;
  padding-left: 20px;
  cursor: pointer;
  padding-right: 20px;

  &:hover {
    background: rgb(238, 238, 238);
    color: #000;
  }
`;
