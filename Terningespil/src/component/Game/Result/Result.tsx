import styles from "./Result.module.scss";
import type { Choice } from "../../types/game";

interface ResultProps {
    choice: Choice | null;
    diceValue: number | null;
}

export const Result = ({ choice, diceValue }: ResultProps) => {
    if (!choice || diceValue === null) return null;

    const win =
        (choice === "higher" && diceValue > 3) ||
        (choice === "lower" && diceValue <= 3);

    return (
        <div className={styles.result}>
            <p>
                Terning: {diceValue} <br />
                {win ? "Du vandt!" : "Du tabte!"}
            </p>
        </div>
    );
};
