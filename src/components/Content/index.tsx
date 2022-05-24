import {
  Container,
  ContentContainer,
  TitleContainer,
  MainTitle,
  IconContainer,
  InfoText,
} from "./styles";
import { Plus } from "phosphor-react";
import { ContentForm } from "../ContentForm";

export function Content() {
  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <MainTitle>Meus hábitos</MainTitle>
          <IconContainer>
            <Plus size={16} weight="bold" color={"#FFF"} />
          </IconContainer>
        </TitleContainer>
        <ContentForm />
        <InfoText>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </InfoText>
      </ContentContainer>
    </Container>
  );
}
