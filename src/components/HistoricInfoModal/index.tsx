import Modal from "react-modal";
import { Check, X } from "phosphor-react";
import { ModalContainer } from "./styles";
import { ReactElement, JSXElementConstructor, ReactFragment } from "react";

interface HistoricInfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  dayData: any;
}

export function HistoricInfoModal({
  isOpen,
  onRequestClose,
  dayData,
}: HistoricInfoModalProps) {
  const days: any = dayData.filter(
    (v: { [x: string]: any }, i: any, a: any[]) =>
      a.findIndex((v2) => ["place", "name"].every((k) => v2[k] === v[k])) === i
  );

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
      <ModalContainer>
        <h4>Hábitos do dia selecionado:</h4>
        {days.map(
          (data: {
            done: any;
            name:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | null
              | undefined;
          }) => {
            if (data.done) {
              return (
                <div>
                  <Check size={15} weight="light" color={"#8FC549"} />
                  <span>{data.name}</span>
                </div>
              );
            } else {
              return (
                <div>
                  <X size={15} weight="light" color={"#E75766"} />
                  <span>{data.name}</span>
                </div>
              );
            }
          }
        )}
      </ModalContainer>
    </Modal>
  );
}
