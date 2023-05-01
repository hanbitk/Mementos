import styled from "styled-components";

export const StForm = styled.form`
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: var(--color-light-white);
`;

export const StImgSection = styled.div`
  border: 1px solid var(--color-light-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  background-color: var(--color-white);
`;

export const StFormSection = styled.div`
  width: 45%;
`;

export const StTitle = styled.p`
  font-size: var(--font-large);
  font-weight: var(--weight-bold);
  margin-bottom: 10px;
`;

export const StInput = styled.input`
  border: 1px solid var(--color-light-gray);
  padding: 8px;
  width: 400px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: var(--color-white);
`;

export const StTextarea = styled.textarea`
  border: 1px solid var(--color-light-gray);
  width: 400px;
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: var(--color-white);

  ::placeholder {
    font-family: "Inter", sans-serif;
  }
`;

export const btnDiv ={
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
}
