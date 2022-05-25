import { Dispatch, SetStateAction } from "react";

export default function nameValidator(
  name: string,
  setName: Dispatch<SetStateAction<string>>,
  setValid: Dispatch<SetStateAction<boolean>>
) {
  const nameRegex = `\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+`;
  const warning = document.getElementById("nameWarning");

  if (!name.match(nameRegex)) {
    warning!.classList.remove("warning-hide");
    setValid(false)
  }

  if (name.match(nameRegex)) {
    warning!.classList.add("warning-hide");
    setName(name);
    setValid(true)
  }
}
