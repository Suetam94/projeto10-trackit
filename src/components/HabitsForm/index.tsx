import {
  FormContainer,
  Input,
  WeekdayContainer,
  Weekday,
  ButtonsContainer,
} from "./styles";

import { weekdays } from "../../utils/weekdays";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import HabitsContext from "../../context/HabitsContext";

interface HabitsFormProps {
  isFormOpen: boolean;
  onFormIsOpened: (open: boolean) => void;
}

export function HabitsForm({ isFormOpen, onFormIsOpened }: HabitsFormProps) {
  const { createNewHabitRequest } = useContext(HabitsContext);
  const [habitName, setHabitName] = useState("");
  const [days, setDays] = useState<Array<number>>([]);
  const [daysSelected, setDaysSelected] = useState<HTMLElement[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleWeekdaysSelection(el: HTMLElement, dayNumber: number) {
    if (el.classList.contains("active")) {
      const elementIndex = daysSelected.findIndex(
        (daySelected) => daySelected === el
      );
      const updatedDaysSelected = daysSelected;
      updatedDaysSelected.splice(elementIndex, 1);
      setDaysSelected(updatedDaysSelected);

      const dayIndex = days.findIndex((day) => day === dayNumber);
      const updatedDays = days;

      updatedDays.splice(dayIndex, 1);
      setDays(updatedDays);

      el.classList.remove("active");
    } else {
      setDaysSelected([...daysSelected, el]);
      setDays([...days, dayNumber]);
    }
  }

  function handleCancelNewHabitCreation() {
    daysSelected.forEach((day) => {
      day.classList.remove("active");
    });

    setDaysSelected([]);
    setHabitName("");

    onFormIsOpened(false);
  }

  useEffect(() => {
    function handleApplySelectedClass() {
      daysSelected.forEach((day) => {
        day.classList.add("active");
      });
    }

    handleApplySelectedClass();
  }, [daysSelected]);

  function handleRemoveSelectedClass() {
    daysSelected.forEach((day) => {
      day.classList.remove("active");
    });
  }

  async function handleFormCreateNewHabitSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(days);

    setIsLoading(true);
    await createNewHabitRequest(habitName, days);
    handleRemoveSelectedClass();
    setHabitName("");
    setDaysSelected([]);
    setDays([]);
    setIsLoading(false);

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
              onClick={(e) =>
                handleWeekdaysSelection(e.target as HTMLElement, weekday.value)
              }
              key={index}
            >
              <span>{weekday.title}</span>
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
          {isLoading ? (
            <ThreeDots width={51} height={13} color={"#FFF"} />
          ) : (
            "Salvar"
          )}
        </button>
      </ButtonsContainer>
    </FormContainer>
  );
}
