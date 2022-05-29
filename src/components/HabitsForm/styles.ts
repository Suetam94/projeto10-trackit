import styled from "styled-components";

export const FormContainer = styled.form`
  display: none;
  flex-direction: column;
  align-items: center;
  min-width: 340px;
  width: 100%;
  min-height: 180px;
  padding: 18px 18px 15px 18px;
  background: var(--general-white);
  border-radius: var(--border-radius);
  margin: 20px 0 29px 0;

  &.form-showed {
    display: flex;
  }

  &.form-hide {
    display: none;
  }
`;

export const Input = styled.input`
  border: var(--general-border-style);
  border-radius: var(--border-radius);
  min-width: 303px;
  width: 100%;
  height: 45px;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  padding-left: 11px;
  outline: none;

  &::placeholder {
    color: #dbdbdb;
  }
`;

export const WeekdayContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Weekday = styled.div`
  width: 30px;
  height: 30px;
  background: var(--general-white);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  border: var(--general-border-style);
  margin-right: 4px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background: #cfcfcf;

    span {
      color: var(--general-white);
      pointer-events: none;
    }

    @media (max-width: 767px) {
      background: var(--general-white);

      span {
        color: var(--placeholder-color);
      }
    }
  }

  &.active {
    background: #cfcfcf;

    span {
      color: var(--general-white);
    }
  }

  span {
    font-size: 19.976px;
    line-height: 25px;
    color: var(--placeholder-color);
    text-transform: uppercase;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;

  button {
    width: 84px;
    height: 35px;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 0.2s;
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }

    &.cancel {
      background: var(--general-white);
      color: var(--general-blue);
    }

    &.save {
      background: var(--general-blue);
      color: var(--general-white);

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`;
