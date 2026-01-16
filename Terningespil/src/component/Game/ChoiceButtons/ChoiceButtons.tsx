import styles from "./ChoiceButtons.module.scss";
import type { Choice } from "../../types/game";

interface ChoiceButtonsProps {
  setChoice: (choice: Choice) => void;
  disabled?: boolean;
}

export const ChoiceButtons = ({
  setChoice,
  disabled = false,
}: ChoiceButtonsProps) => {
  return (
    <div className={styles.choices}>
      <button onClick={() => setChoice("higher")} disabled={disabled}>
        Højere
      </button>
      <button onClick={() => setChoice("lower")} disabled={disabled}>
        Lavere
      </button>
    </div>
  );
};
