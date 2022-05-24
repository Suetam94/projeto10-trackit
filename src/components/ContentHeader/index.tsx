import { HeaderContainer, HeaderLogo, HeaderUserImage } from "./styles";
import { User } from "phosphor-react";

export function ContentHeader() {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo>TrackIt</HeaderLogo>
        <User
          size={51}
          weight="fill"
          style={{ borderRadius: "50%", cursor: "pointer" }}
        />
        {/*<HeaderUserImage src={""} />*/}
      </HeaderContainer>
    </>
  );
}
