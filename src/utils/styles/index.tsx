import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputField = styled.input`
  background-color: #131313;
  color: #fff;
  font-family: "Inter";
  border: none;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  margin: 4px 0;

  // Override browser form-filling and input highlighting
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #131313 inset;
    -webkit-text-fill-color: #fff;
  }
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2b09ff;
  color: #fff;
  font-family: "Inter";
  border: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 20px 0;
  cursor: pointer;
  transition: 250ms background-color ease;
  font-weight: 500;
  &:hover {
    background-color: #361ed4;
  }
  &:active {
  }
`;

export const Page = styled.div`
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
