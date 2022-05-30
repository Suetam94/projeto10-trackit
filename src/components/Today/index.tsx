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

  function handleCalcPercent(): number {
    const done = todayHabits
      .map((habit) => {
        if (habit.done) {
          return habit;
        }
      })
      .filter((habit) => habit);

    return done.length / todayHabits.length;
  }

  const date = new Date();
  const actualWeekday = format(date, "eee, dd/MM", { locale: ptBR });

  return (
    <Container>
      <TodayContainer>
        <TitleContainer>
          <MainTitle>{actualWeekday}</MainTitle>
          {todayHabits.length === 0 ? (
            <SubTitle>Nenhum hábito concluído ainda</SubTitle>
          ) : (
            <SubTitle className={"active"}>{(handleCalcPercent() * 100).toFixed(0)}% dos hábitos concluídos</SubTitle>
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
