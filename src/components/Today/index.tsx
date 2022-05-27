import { format } from "date-fns";

import {
  Container,
  TodayContainer,
  TitleContainer,
  MainTitle,
  SubTitle,
} from "./styles";
import { TodayHabitCart } from "../TodayHabitCart";
import { useContext } from "react";
import HabitsContext from "../../context/HabitsContext";
import { ptBR } from "date-fns/locale";

export function Today() {
  const { todayHabits } = useContext(HabitsContext);

  const date = new Date();
  const actualWeekday = format(date, "eee, dd/MM", { locale: ptBR });

  console.log(todayHabits);

  return (
    <Container>
      <TodayContainer>
        <TitleContainer>
          <MainTitle>{actualWeekday}</MainTitle>
          {todayHabits.length === 0 && (
            <SubTitle>Nenhum hábito concluído ainda</SubTitle>
          )}
        </TitleContainer>
        {todayHabits.map(
          ({ id, currentSequence, highestSequence, done, name }, index) => {
            return (
              <TodayHabitCart
                key={index}
                id={id}
                done={done}
                currentSequence={currentSequence}
                highestSequence={highestSequence}
                name={name}
              />
            );
          }
        )}
      </TodayContainer>
    </Container>
  );
}
