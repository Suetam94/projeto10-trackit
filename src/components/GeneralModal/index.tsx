import Modal from "react-modal";
import { X } from "phosphor-react";
import { InfoText } from "./styles";

interface GeneralModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  infoText: string;
}

export function GeneralModal({
  isOpen,
  onRequestClose,
  infoText,
}: GeneralModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={"react-modal-overlay"}
      className={"react-modal-content"}
    >
      <button
        type={"button"}
        onClick={onRequestClose}
        className={"react-modal-close"}
      >
        <X />
      </button>
      <InfoText>{infoText}</InfoText>
    </Modal>
  );
}
