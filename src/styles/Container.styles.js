import styled from "styled-components";

export const StContainer = styled.div`
  padding: 20px;
  max-width: 1300px;
  margin: 0 auto;
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
`;
