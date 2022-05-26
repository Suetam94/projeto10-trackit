import {
  HabitItemContainer,
  HabitTitle,
  Weekday,
  WeekdaysContainer,
} from "./styles";
import { Trash } from "phosphor-react";
import { weekdays } from "../../utils/weekdays";
import HabitsContext, { Habit } from "../../context/HabitsContext";
import { api } from "../../services/axios";
import { useContext } from "react";
import UserDataContext from "../../context/UserContext";

export function HabitItem({ id, name, days }: Habit) {
  const { userData } = useContext(UserDataContext);
  const { setHabitExcluded } = useContext(HabitsContext);
  function handleWeekday(weekdayValue: number) {
    const dayIsSelected = days.find((day) => day === weekdayValue);

    return !!dayIsSelected;
  }

  async function handleDeleteHabit(id: number) {
    try {
      await api.delete(`/habits/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });

      setHabitExcluded(true);
    } catch (e) {
      console.log(e); //TODO
    }
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
