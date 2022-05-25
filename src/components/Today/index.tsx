import {
  Container,
  TodayContainer,
  TitleContainer,
  MainTitle,
  SubTitle,
} from "./styles";
import { TodayHabitCart } from "../TodayHabitCart";

export function Today() {
  return (
    <Container>
      <TodayContainer>
        <TitleContainer>
          <MainTitle>Segunda, 17/05</MainTitle>
          <SubTitle>Nenhum hábito concluído ainda</SubTitle>
        </TitleContainer>
        <TodayHabitCart />
      </TodayContainer>
    </Container>
  );
}
