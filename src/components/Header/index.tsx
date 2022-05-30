import { HeaderContainer, HeaderLogo, HeaderUserImage } from "./styles";
import { useContext } from "react";
import UserDataContext from "../../context/UserContext";

export function Header() {
  const { userData } = useContext(UserDataContext);

  return (
    <>
      <HeaderContainer>
        <HeaderLogo>TrackIt</HeaderLogo>
        <HeaderUserImage src={userData.image} />
      </HeaderContainer>
    </>
  );
}
