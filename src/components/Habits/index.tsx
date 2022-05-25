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
import { useState } from "react";

export function Habits() {
  const [isFormOpen, setIsFormOpen] = useState(false);
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
        <InfoText>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </InfoText>
      </ContentContainer>
    </Container>
  );
}
