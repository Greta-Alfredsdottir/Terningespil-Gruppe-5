import styles from "./PlayerScore.module.scss";
import type { Player as PlayerType, Choice } from "../../types/game";
import { useEffect } from "react";


interface PlayerScoreProps {
    player: PlayerType;
    choice: Choice | null;
    diceValue: number | null;
    onScoreUpdate: (newScore: number) => void;
}

export const PlayerScore = ({ player, choice, diceValue, onScoreUpdate }: PlayerScoreProps) => {
    if (!choice || diceValue === null) return null;

    const calculateWin = () => {
        return (choice === "higher" && diceValue > 3) ||
            (choice === "lower" && diceValue <= 3);
    };

    const win = calculateWin();

    // useEffect må ikke være betinget
    useEffect(() => {
        const points = win ? 10 : -5;
        onScoreUpdate(player.score + points);
    }, [diceValue, choice, win, player.score, onScoreUpdate]);

    return (
        <div className={styles.playerScore}>
            <h3>{player.name}</h3>
            <div className={styles.scoreDisplay}>
                <strong>Score: {player.score}</strong>
            </div>
            {win !== null && (
                <div className={styles.result}>
                    <p>Terning: {diceValue}</p>
                    <p>{win ? "✓ Du vandt!" : "✗ Du tabte!"}</p>
                </div>
            )}
        </div>
    );
};