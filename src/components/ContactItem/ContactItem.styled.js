import styled from "styled-components";

export const TableCell = styled.td`
  color: black;
  font-size: 18px;
  font-weight: 600;

  padding: 10px 10px 10px 0;
   background-color: rgba(205, 205, 205, 0.9);
  border-radius: 5px;
`;

export const BtnTool = styled.button`
  cursor: pointer;

  display: block;
  margin: 0 auto;
  padding: 5px 10px;

  background-color: transparent;
  border-radius: 5px;
  border: none;

  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(0.9);
  }
`;
