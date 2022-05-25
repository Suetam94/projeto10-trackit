import {
  FormContainer,
  Input,
  WeekdayContainer,
  Weekday,
  ButtonsContainer,
} from "./styles";

import { weekdays } from "../../utils/weekdays";

interface HabitsFormProps {
  isFormOpen: boolean;
  onFormIsOpened: (open: boolean) => void;
}

export function HabitsForm({ isFormOpen, onFormIsOpened }: HabitsFormProps) {
  return (
    <FormContainer
      id={"formContainer"}
      className={isFormOpen ? "form-showed" : "form-hide"}
    >
      <Input type={"text"} placeholder={"nome do hábito"} />
      <WeekdayContainer>
        {weekdays.map((weekday, index) => {
          return (
            <Weekday key={index}>
              <span>{weekday.title}</span>
              <input type="hidden" value={weekday.value} />
            </Weekday>
          );
        })}
      </WeekdayContainer>
      <ButtonsContainer>
        <button
          onClick={() => onFormIsOpened(false)}
          type={"button"}
          className="cancel"
        >
          Cancelar
        </button>
        <button type={"submit"} className="save">
          Salvar
        </button>
      </ButtonsContainer>
    </FormContainer>
  );
}
