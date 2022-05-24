import {
  FormContainer,
  Input,
  WeekdayContainer,
  Weekday,
  ButtonsContainer,
} from "./styles";

export function HabitsForm() {
  const weekdays: Array<string> = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <FormContainer>
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
        <button type={"button"} className="cancel">
          Cancelar
        </button>
        <button type={"submit"} className="save">
          Salvar
        </button>
      </ButtonsContainer>
    </FormContainer>
  );
}
