import { Dispatch, SetStateAction } from "react";

export default function passwordValidator(
  password: string,
  setPassword: Dispatch<SetStateAction<string>>,
  setValid: Dispatch<SetStateAction<boolean>>
) {
  const passwordRegex = `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$`;
  const warning = document.getElementById("passwordWarning");

  if (!password.match(passwordRegex)) {
    warning!.classList.remove("warning-hide");
    setValid(false);
  }

  if (password.match(passwordRegex)) {
    warning!.classList.add("warning-hide");
    setPassword(password);
    setValid(true);
  }
}
