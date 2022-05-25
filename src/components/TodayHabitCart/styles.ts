import styled from "styled-components";

export const TodayCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 340px;
  width: 100%;
  min-height: 94px;
  background: var(--general-white);
  border-radius: var(--border-radius);
  padding: 15px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HabitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HabitTitle = styled.h4`
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
  margin-bottom: 7px;
`;

export const HabitData = styled.span`
  display: block;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
`;

export const HabitCheckContainer = styled.button`
  width: 69px;
  height: 69px;
  background: #ebebeb;
  border: 1px solid var(--inactive-check-color);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background: var(--active-check-color);
  }
`;
