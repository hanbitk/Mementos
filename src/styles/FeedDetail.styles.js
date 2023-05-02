import styled from "styled-components";
import { divStyle } from "./Feed.styles";

export const StPostTitle = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export const StPostDescription = styled.div`
  background-color: var(--color-light-white);
  width: 350px;
  height: 450px;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  padding: 30px 20px 20px;
  text-align: left;
`;
export const linkStyle = {
  textDecoration: "none",
  color: "black",
};

export const iconStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
};

export const infoDivStyle = {
    width: '350px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0',
}