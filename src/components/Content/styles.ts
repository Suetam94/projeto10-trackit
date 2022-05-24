import styled from "styled-components";

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 22px 18px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainTitle = styled.h3`
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: var(--darker-blue);
`;

export const IconContainer = styled.button`
  width: 40px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--general-blue);
  border-radius: var(--border-radius);
  cursor: pointer;
`;
