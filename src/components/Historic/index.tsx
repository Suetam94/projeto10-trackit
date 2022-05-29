import { useContext, useState } from "react";
import HabitsContext from "../../context/HabitsContext";
import Calendar, {
  CalendarTileProperties,
  ViewCallbackProperties,
} from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { Container, GeneralTitle, NoDataMessage } from "./styles";

export function Historic() {
  const { habitsHistoric } = useContext(HabitsContext);
  const [value, onChange] = useState(new Date());
  return (
    <Container>
      <GeneralTitle>Histórico</GeneralTitle>
      <Calendar
        locale={"pt-br"}
        onChange={onChange}
        value={value}
        calendarType={"US"}
      />
    </Container>
  );
}
