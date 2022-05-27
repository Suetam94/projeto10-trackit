import {
  HabitItemContainer,
  HabitTitle,
  Weekday,
  WeekdaysContainer,
} from "./styles";
import { Trash } from "phosphor-react";
import { weekdays } from "../../utils/weekdays";
import HabitsContext, { Habit } from "../../context/HabitsContext";
import { useContext } from "react";

export function HabitItem({ id, name, days }: Habit) {
  const { deleteHabitRequest, setHabitExcluded } = useContext(HabitsContext);
  function handleWeekday(weekdayValue: number) {
    const dayIsSelected = days.find((day) => day === weekdayValue);

    return !!dayIsSelected;
  }

  async function handleDeleteHabit(id: number) {
    setHabitExcluded(true);
    await deleteHabitRequest(id);
  }

  return (
    <HabitItemContainer>
      <Trash
        onClick={() => handleDeleteHabit(id!)}
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
