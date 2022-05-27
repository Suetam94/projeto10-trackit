import {
  FormContainer,
  Input,
  WeekdayContainer,
  Weekday,
  ButtonsContainer,
} from "./styles";

import { weekdays } from "../../utils/weekdays";
import { FormEvent, useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import HabitsContext from "../../context/HabitsContext";

interface HabitsFormProps {
  isFormOpen: boolean;
  onFormIsOpened: (open: boolean) => void;
}

export function HabitsForm({ isFormOpen, onFormIsOpened }: HabitsFormProps) {
  const { createNewHabitRequest } = useContext(HabitsContext);
  const [habitName, setHabitName] = useState("");
  const [days, setDays] = useState<Array<number>>([]);
  const [daySelected, setDaySelected] = useState<HTMLElement[]>([]);

  function handleWeekdaysSelection(el: HTMLElement) {
    setDaySelected([...daySelected, el]);
    el.childNodes.forEach((node) => {
      if (node.nodeName === "INPUT") {
        const input = node as HTMLInputElement;
        setDays([...days, Number(input.value)]);
      }
    });
  }

  function handleCancelNewHabitCreation() {
    daySelected.forEach((day) => {
      day.classList.remove("active");
    });

    setDaySelected([]);

    onFormIsOpened(false);
  }

  useEffect(() => {
    function handleApplySelectedClass() {
      daySelected.forEach((day) => {
        day.classList.add("active");
      });
    }

    handleApplySelectedClass();
  }, [daySelected]);

  async function handleFormCreateNewHabitSubmit(event: FormEvent) {
    event.preventDefault();

    await createNewHabitRequest(habitName, days);

    setHabitName("");
    setDays([]);
    setDaySelected([]);

    onFormIsOpened(false);
  }

  return (
    <FormContainer
      id={"formContainer"}
      className={isFormOpen ? "form-showed" : "form-hide"}
      onSubmit={(e) => handleFormCreateNewHabitSubmit(e)}
    >
      <Input
        type={"text"}
        placeholder={"nome do hábito"}
        onChange={(e) => setHabitName(e.target.value)}
        value={habitName}
      />
      <WeekdayContainer>
        {weekdays.map((weekday, index) => {
          return (
            <Weekday
              onClick={(e) => handleWeekdaysSelection(e.target as HTMLElement)}
              key={index}
            >
              <span>{weekday.title}</span>
              <input type="hidden" value={weekday.value} />
            </Weekday>
          );
        })}
      </WeekdayContainer>
      <ButtonsContainer>
        <button
          onClick={handleCancelNewHabitCreation}
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
