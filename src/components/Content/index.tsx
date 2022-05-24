import {
  ContentContainer,
  TitleContainer,
  MainTitle,
  IconContainer,
} from "./styles";
import { Plus } from "phosphor-react";

export function Content() {
  return (
    <ContentContainer>
      <TitleContainer>
        <MainTitle>Meus hábitos</MainTitle>
        <IconContainer>
          <Plus size={16} weight="bold" color={"#FFF"} />
        </IconContainer>
      </TitleContainer>
    </ContentContainer>
  );
}
