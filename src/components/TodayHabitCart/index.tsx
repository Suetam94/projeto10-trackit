import {
  TodayCartContainer,
  HabitTitle,
  HabitData,
  HabitInfoContainer,
  HabitCheckContainer,
} from "./styles";
import { Check } from "phosphor-react";

export function TodayHabitCart() {
  return (
    <TodayCartContainer>
      <HabitInfoContainer>
        <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
        <HabitData>Sequência atual: 3 dias</HabitData>
        <HabitData>Seu recorde: 5 dias</HabitData>
      </HabitInfoContainer>
      <HabitCheckContainer>
        <Check
          size={32}
          weight="bold"
          width={35.09}
          height={28}
          color={"#FFF"}
        />
      </HabitCheckContainer>
    </TodayCartContainer>
  );
}
