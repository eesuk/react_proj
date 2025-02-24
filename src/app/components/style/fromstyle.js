import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #2d2f36;
  padding: 10px;
  border-radius: 10px;
  color: #6599c3;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  margin-left: 15px;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #1f2127;
  color: #fff;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 8px rgba(74, 144, 226, 0.6);
  }
`;
