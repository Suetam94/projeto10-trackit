import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-width: 375px;
  width: 100%;
  min-height: 70px;
  background: var(--general-white);
  display: flex;
  position: sticky;
  bottom: 0;
  left: 0;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 31px 0 36px;
  position: relative;
`;

export const FooterSpan = styled.span`
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  color: var(--general-blue);
  cursor: pointer;
`;

export const TodayCircle = styled.div`
  width: 91px;
  height: 91px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
`;
