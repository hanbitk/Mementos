import styled from "styled-components";

export const StSignInContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const StSignInHeader = styled.header`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: var(--weight-bold);
`;

export const StSignInForm = styled.div`
  border: 1px solid var(--color-gray);
  padding: 30px;
  height: 300px;
  border-radius: 10px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StSignInFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StSignIn = styled.div`
  width: 450px;
  border-radius: 4px;
`;

export const StSignInInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StSignInInput = styled.input`
  border-radius: 4px;
  width: 350px;
  padding: 10px;
  cursor: pointer;
`;

export const StInputBox = styled.div`
  border: 1px solid var(--color-light-gray);
  display: flex;
  align-content: center;
  padding: 10px;
  border-radius: ${(props) => props.borderRadius};
`;

export const StSignUp = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const linkStyle = {
  color: "var(--color-gray)",
  fontSize: "var(--font-small)",
  padding: "10px",
  borderRadius: "10px",
  cursor: "pointer",
};

export const logoLinkStyle = {
  color: "var(--color-black)",
  cursor: "pointer",
  textDecoration: "none",
};

export const iconStyle = {
  fontSize: "var(--font-medium)",
  alignSelf: "center",
  marginRight: "4px",
  color: "var(--color-gray)",
};

export const signInIconStyle = {
  fontSize: "var(--font-medium)",
  alignSelf: "center",
  marginRight: "10px",
};
