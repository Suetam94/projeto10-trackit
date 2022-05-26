import styled from "styled-components";

export const HabitItemContainer = styled.div`
  min-width: 340px;
  width: 100%;
  min-height: 91px;
  position: relative;
  padding: 13px 15px 15px 15px;
  background: var(--general-white);
  border-radius: var(--border-radius);
  margin-top: 20px;
`;

export const HabitTitle = styled.h4`
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  margin-bottom: 8px;
`;

export const WeekdaysContainer = styled.div`
  display: flex;
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
