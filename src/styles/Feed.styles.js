import styled from "styled-components";

export const StFeedContainer = styled.div`
  padding: 20px;
  max-width: 1300px;
  margin: 0 auto;
`;

export const StFeed = styled.div`
  border: 1px solid var(--color-light-gray);
  background-color: var(--color-light-white);
  width: 300px;
  border-radius: 4px;
  box-shadow: 2px 5px 9px -3px rgba(115, 104, 104, 0.73);
`;

export const StFeedtitle = styled.h4`
  margin-bottom: 3px;
  padding: 10px;
`;

export const StFeedDescription = styled.p`
  padding: 10px;
`;

export const StDeleteButton = styled.button`
  padding: 10px;
  font-size: var(--font-medium);
  cursor: pointer;
`;

export const StFeedInfo = styled.p`
  font-size: var(--font-small);
  padding: 10px;
  color: gray;
`;

export const divStyle = {
  display: 'flex',
  justifyContent: 'space-between',
}

export const masonryBreakpoints = {
  default: 4,
  1100: 2,
  700: 1,
};