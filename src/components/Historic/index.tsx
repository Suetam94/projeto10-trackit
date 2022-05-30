import { useContext, useEffect, useState } from "react";
import HabitsContext from "../../context/HabitsContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { Container, GeneralTitle } from "./styles";

export function Historic() {
  const { habitsHistoric } = useContext(HabitsContext);
  const [value, onChange] = useState(new Date());
  const [dayData, setDayData] = useState<any>("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const abbrs = document.querySelectorAll("abbr");

    abbrs.forEach((abbr) => {
      const habitExist = habitsHistoric.find(
        (habit) => habit.day === abbr.ariaLabel
      );

      if (habitExist) {
        habitExist.habits.forEach((habit) => {
          if (habit.done) {
            abbr.style.backgroundColor = "#8FC549";
          } else {
            abbr.style.backgroundColor = "#e75766";
            abbr.style.color = "#FFF";
          }
        });
      }
    });
  }, [habitsHistoric]);

  console.log(dayData);

  function handleHabitsHistoricCheck(e: Date) {
    const formatedDate = format(e, "dd/MM/yyyy");

    const habitsOfTheDay = habitsHistoric.find(
      (habit) => habit.day === formatedDate
    );

    if (habitsOfTheDay) {
      habitsOfTheDay.habits.forEach((habit) => {
        setDayData([...dayData, habit]);
      });

      setModalOpen(true);
    }
  }

  function handleModalIsClosed() {
    setModalOpen(false);
  }

  return (
    <Container>
      <GeneralTitle>Histórico</GeneralTitle>
      <Calendar
        locale={"pt-br"}
        onChange={onChange}
        value={value}
        calendarType={"US"}
        formatLongDate={(locale, date) => format(date, "dd/MM/yyyy")}
        onClickDay={(e) => handleHabitsHistoricCheck(e)}
      />
      {/*<HistoricInfoModal*/}
      {/*  isOpen={modalOpen}*/}
      {/*  onRequestClose={handleModalIsClosed}*/}
      {/*  dayData={dayData}*/}
      {/*/>*/}
    </Container>
  );
}
