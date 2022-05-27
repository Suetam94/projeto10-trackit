import {
  FooterContainer,
  FooterContent,
  FooterSpan,
  TodayCircle,
} from "./styles";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Link href={"/habitos"}>
          <FooterSpan>Hábitos</FooterSpan>
        </Link>
        <TodayCircle >
          <CircularProgressbar
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              pathColor: "#FFF",
              trailColor: "#52B6FF",
              textColor: "#FFF",
            })}
            value={10}
            background={true}
            backgroundPadding={6}
            text={"Hoje"}
          />
        </TodayCircle>
        <Link href={"/historico"}>
          <FooterSpan>Histórico</FooterSpan>
        </Link>
      </FooterContent>
    </FooterContainer>
  );
}
