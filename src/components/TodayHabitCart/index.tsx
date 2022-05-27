import {
  TodayCartContainer,
  HabitTitle,
  HabitData,
  HabitInfoContainer,
  HabitCheckContainer,
} from "./styles";
import { Check } from "phosphor-react";
import HabitsContext, { TodayHabitProps } from "../../context/HabitsContext";
import { useContext, useState } from "react";

export function TodayHabitCart({
  id,
  currentSequence,
  done,
  highestSequence,
  name,
}: TodayHabitProps) {
  const [taskIsDone, setTaskIsDone] = useState<boolean>(done);
  const { checkHabitRequest, uncheckHabitRequest } = useContext(HabitsContext);

  async function handleTaskIsDone() {
    if (taskIsDone) {
      const unchecked = await uncheckHabitRequest(id);

      if (unchecked) {
        setTaskIsDone(false);
      }
    } else {
      const checked = await checkHabitRequest(id);

      if (checked) {
        setTaskIsDone(true);
      }
    }
  }

  return (
    <TodayCartContainer>
      <HabitInfoContainer>
        <HabitTitle>{name}</HabitTitle>
        <HabitData>Sequência atual: {currentSequence} dias</HabitData>
        <HabitData>Seu recorde: {highestSequence} dias</HabitData>
      </HabitInfoContainer>
      <HabitCheckContainer
        onClick={handleTaskIsDone}
        className={taskIsDone ? "active" : ""}
      >
        <Check
          size={32}
          weight="bold"
          width={35.09}
          height={28}
          color={"#FFF"}
        />
      </HabitCheckContainer>
    </TodayCartContainer>
  );
}
