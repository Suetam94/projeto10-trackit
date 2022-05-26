import {
  FormContainer,
  Input,
  WeekdayContainer,
  Weekday,
  ButtonsContainer,
} from "./styles";

import { weekdays } from "../../utils/weekdays";
import { FormEvent, useContext, useState } from "react";
import HabitsContext from "../../context/HabitsContext";
import UserContext from "../../context/UserContext";
import { api } from "../../services/axios";

interface HabitsFormProps {
  isFormOpen: boolean;
  onFormIsOpened: (open: boolean) => void;
}

export function HabitsForm({ isFormOpen, onFormIsOpened }: HabitsFormProps) {
  const { setNewHabit } = useContext(HabitsContext);
  const { userData } = useContext(UserContext);

  const [habitName, setHabitName] = useState("");
  const [days, setDays] = useState<Array<number>>([]);

  function handleWeekdaysSelection(el: HTMLElement) {
    el.childNodes.forEach((node) => {
      if (node.nodeName === "INPUT") {
        const input = node as HTMLInputElement;
        setDays([...days, Number(input.value)]);
      }
    });
  }

  async function handleFormCreateNewHabitSubmit(event: FormEvent) {
    event.preventDefault();

    const createNewHabitRequestObject = {
      name: habitName,
      days,
    };

    try {
      const response = await api.post("/habits", createNewHabitRequestObject, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
    } catch (e) {
      console.log(e); //TODO
    }
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
