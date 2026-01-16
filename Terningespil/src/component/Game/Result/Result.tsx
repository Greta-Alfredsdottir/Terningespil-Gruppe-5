import styles from "./Result.module.scss";
import type { Choice } from "../../types/game";
import { useEffect } from "react";

interface ResultProps {
    choice: Choice | null;
    diceValue: number | null;
    onScoreUpdate?: (newScore: number) => void;
}

export const Result = ({ choice, diceValue, onScoreUpdate }: ResultProps) => {
    const win = choice && diceValue !== null
        ? (choice === "higher" && diceValue > 3) ||
        (choice === "lower" && diceValue <= 3)
        : null;

    // useEffect må ikke være betinget - den skal altid køre
    useEffect(() => {
        if (win !== null) {
            const points = win ? 10 : -5;
            onScoreUpdate?.(points);
        }
    }, [diceValue, choice, win, onScoreUpdate]);

    if (!choice || diceValue === null) return null;

    return (
        <div className={styles.result}>
            <p>
                Terning: {diceValue} <br />
                {win ? "Du vandt!" : "Du tabte!"}
            </p>
        </div>
    );
};
