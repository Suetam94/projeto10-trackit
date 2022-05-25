import {
  FormContainer,
  Input,
  WeekdayContainer,
  Weekday,
  ButtonsContainer,
} from "./styles";

interface HabitsFormProps {
  isFormOpen: boolean;
  onFormIsOpened: (open: boolean) => void;
}

export function HabitsForm({ isFormOpen, onFormIsOpened }: HabitsFormProps) {
  const weekdays: Array<string> = ["D", "S", "T", "Q", "Q", "S", "S"];

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
              <span>{weekday}</span>
              <input type="hidden" value={weekday} />
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
