import {
  HabitItemContainer,
  HabitTitle,
  Weekday,
  WeekdaysContainer,
} from "./styles";
import { Trash } from "phosphor-react";
import { weekdays } from "../../utils/weekdays";
import { Habit } from "../../context/HabitsContext";

export function HabitItem({ name, days }: Habit) {
  function handleWeekday(weekdayValue: number) {
    const dayIsSelected = days.find((day) => day === weekdayValue);

    return !!dayIsSelected;
  }

  return (
    <HabitItemContainer>
      <Trash
        style={{
          position: "absolute",
          top: "13px",
          right: "15px",
          cursor: "pointer",
        }}
        width={"13px"}
        height={"15px"}
        weight="light"
      />
      <HabitTitle>{name}</HabitTitle>
      <WeekdaysContainer>
        {weekdays.map((weekday, index) => {
          return (
            <Weekday
              className={handleWeekday(weekday.value) ? "active" : ""}
              key={index}
            >
              <span>{weekday.title}</span>
            </Weekday>
          );
        })}
      </WeekdaysContainer>
    </HabitItemContainer>
  );
}
