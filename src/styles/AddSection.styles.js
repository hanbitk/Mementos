import styled from "styled-components";

export const StContainer = styled.div`
  padding: 20px;
  max-width: 1300px;
  margin: 0 auto;
`;

export const StAddSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
`;

export const StTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

export const title = {
  fontSize: "40px",
  fontWeight: "var(--weight-semi-bold)",
};

export const description = {
  fontSize: "30px",
};
