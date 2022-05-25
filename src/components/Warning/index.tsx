import { SmallWarning } from "./styles";

interface WarningProps {
  id: string;
  warningText: string;
}

export function Warning({ id, warningText }: WarningProps) {
  return (
    <SmallWarning id={id} className={"warning-hide"}>
      {warningText}
    </SmallWarning>
  );
}
