import styled from "styled-components";

export const Container = styled.div`
  background: var(--body-background-color);
  min-height: 100vh;
`;

export const TodayContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 17px 87px 18px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 375px;
  width: 100%;
  margin-bottom: 28px;
`;

export const MainTitle = styled.h3`
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: var(--darker-blue);
  text-transform: capitalize;
`;

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #bababa;

  &.active {
    color: #8fc549;
  }
`;
