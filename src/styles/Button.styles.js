import styled from "styled-components";

export const Stbutton = styled.button`
  color: var(--color-light-white);
  background-color: var(--color-black);
  width: ${(props) => props.size};
  font-size: ${(props) => props.fontSize};
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;
