import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 375px;
  width: 100%;
  height: 70px;
  padding: 0 18px;
  background: var(--darker-blue);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
`;

export const HeaderLogo = styled.h1`
  font-family: "Playball", cursive;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: var(--general-white);
`;

export const HeaderUserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background: var(--body-background-color);
  cursor: pointer;
`;
