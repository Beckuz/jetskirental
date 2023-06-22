import styled from "styled-components";

export const StyledForm = styled.form`
  background: RGBA(150,190,255,.8);
  font-size: 20px;
  padding: 3%;
  min-width:300px;
  width:40vw;
  border-radius:10px;
  margin:1vw;
`

export const StyledLabel = styled.label`
  display: flex;
  margin-bottom: 5px;
  font-weight: bold;
  margin-bottom:3%;
  margin-top:5%;
  color: ${props => props.invalid ? 'red' : 'black'};
`

export const StyledInput = styled.input`
  width: 90%;
  padding: 10px;
  display:flex;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledTextArea = styled.textarea`
  width: 90%;
  padding: 10px;
  resize:none;
  display:flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 8vw;
`

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  width:90%;
  font-size:15px;
  margin-top: 10px;
  border-radius: 5px;
`