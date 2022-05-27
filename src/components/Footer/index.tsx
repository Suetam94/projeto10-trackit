import {FooterContainer, FooterContent, FooterSpan, TodayCircle,} from "./styles";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import {useContext} from "react";
import HabitsContext from "../../context/HabitsContext";

export function Footer() {
  const { todayHabits } = useContext(HabitsContext);

  function handleCalcPercent() {
    const done = todayHabits
      .map((habit) => {
        if (habit.done) {
          return habit;
        }
      })
      .filter((habit) => habit);

    return (done.length / todayHabits.length);
  }

  return (
    <FooterContainer>
      <FooterContent>
        <Link href={"/habitos"}>
          <FooterSpan>Hábitos</FooterSpan>
        </Link>
        <Link href={"/hoje"}>
          <TodayCircle>
            <CircularProgressbar
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                pathColor: "#FFF",
                trailColor: "#52B6FF",
                textColor: "#FFF",
              })}
              value={handleCalcPercent() * 100}
              background={true}
              backgroundPadding={6}
              text={"Hoje"}
            />
          </TodayCircle>
        </Link>
        <Link href={"/historico"}>
          <FooterSpan>Histórico</FooterSpan>
        </Link>
      </FooterContent>
    </FooterContainer>
  );
}
