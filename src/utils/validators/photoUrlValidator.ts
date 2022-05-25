import { Dispatch, SetStateAction } from "react";

export default function photoUrlValidator(
  photo: string,
  setPhoto: Dispatch<SetStateAction<string>>,
  setValid: Dispatch<SetStateAction<boolean>>
) {
  const photoRegex = `[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)`;
  const warning = document.getElementById("photoWarning");

  if (!photo.match(photoRegex)) {
    warning!.classList.remove("warning-hide");
    setValid(false);
  }

  if (photo.match(photoRegex)) {
    warning!.classList.add("warning-hide");
    setPhoto(photo);
    setValid(true);
  }
}
