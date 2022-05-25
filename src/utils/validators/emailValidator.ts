import { Dispatch, SetStateAction } from "react";

export default function emailValidator(
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  setValid: Dispatch<SetStateAction<boolean>>
) {
  const mailFormatRegex = `^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`;
  const warning = document.getElementById("emailWarning");

  if (!email.match(mailFormatRegex)) {
    warning!.classList.remove("warning-hide");
    setValid(false);
  }

  if (email.match(mailFormatRegex)) {
    warning!.classList.add("warning-hide");
    setEmail(email);
    setValid(true);
  }
}
