import styled from "styled-components";

export const StHeader = styled.header`
  padding-inline: 30px;
  width: 100vw;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(221, 221, 221, 0.1);
  position: fixed;
`;

export const StLogo = styled.h1`
  padding-right: 2px;
  margin-right: 10px;
  font-weight: var(--weight-bold);
  font-size: var(--font-large);
  width: 80px;
  height: 120px;
  word-break: break-word;
`;

export const StNavbar = styled.nav`
  display: flex;
  align-items: center;
  font-weight: var(--weight-semi-bold);
  font-size: var(--font-medium);

  ul {
    display: flex;
    justify-content: space-between;
    li {
      margin: 10px;
    }
  }
`;

export const StIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const StyleFlex = {
  display: "flex",
};
