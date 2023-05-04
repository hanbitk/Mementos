import styled from "styled-components";

export const StImgInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-small);
  color: gray;
  cursor: pointer;
  padding-block: 3px;
`

export const StImg = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  object-fit: cover;
  border-radius: 4px;

  &:hover{
    transform: translateY(3px);
    transition: 0.2s;
  }
`;


