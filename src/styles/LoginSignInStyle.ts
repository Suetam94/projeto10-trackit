import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 36px 199px 36px;
`;

export const LoginImage = styled.img`
  width: 180px;
  height: 178.38px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 303px;
  width: 100%;
  margin-top: 32.62px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: var(--general-border-style);
  border-radius: var(--border-radius);
  padding-left: 11px;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  margin-bottom: 6px;

  &::placeholder {
    color: #dbdbdb;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

export const SignInLink = styled.a`
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
  margin-top: 25px;
  cursor: pointer;
`;
