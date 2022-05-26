import {
  Container,
  ContentContainer,
  TitleContainer,
  MainTitle,
  IconContainer,
  InfoText,
} from "./styles";
import { Plus } from "phosphor-react";
import { HabitsForm } from "../HabitsForm";
import { useContext, useState } from "react";
import HabitsContext from "../../context/HabitsContext";
import { HabitItem } from "../HabitItem";

export function Habits() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { habits } = useContext(HabitsContext);
  function handleIsFormOpen() {
    setIsFormOpen(true);
  }

  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <MainTitle>Meus hábitos</MainTitle>
          <IconContainer onClick={handleIsFormOpen}>
            <Plus size={16} weight="bold" color={"#FFF"} />
          </IconContainer>
        </TitleContainer>
        <HabitsForm isFormOpen={isFormOpen} onFormIsOpened={setIsFormOpen} />
        {habits.length === 0 ? (
          <InfoText>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </InfoText>
        ) : (
          habits.map((habit) => {
            return (
              <HabitItem key={habit.id} id={habit.id} name={habit.name} days={habit.days} />
            );
          })
        )}
      </ContentContainer>
    </Container>
  );
}
