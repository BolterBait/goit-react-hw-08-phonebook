import styled from "styled-components";

export const Wrap = styled.form`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin-left: 40px;
  border: 2px solid grey;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 350px;
  background-color: rgba(205, 205, 205, 0.9);  
  `

export const Field = styled.input`
padding: 5px;
margin-bottom: 15px;
margin-left: 15px;
border-radius: 10px;
width: 250px;
`

export const AddButton = styled.button`
font-size: 18px;
font-weight: 700;
padding: 10px;
margin-left: 15px;
border-radius: 8px;`
