import React, { useState } from 'react';
import type { Player } from "../../types/game";

interface PlayerTurnProps {
    currentPlayer: Player;
    onScoreUpdate: (playerId: number, points: number) => void;
    onEndTurn: () => void;
}

export const PlayerTurn: React.FC<PlayerTurnProps> = ({
    currentPlayer,
    onScoreUpdate,
    onEndTurn
}) => {
    const [diceValue, setDiceValue] = useState<number>(0);
    const [isRolling, setIsRolling] = useState(false);
    const [turnScore, setTurnScore] = useState(0);

    const rollDice = () => {
        setIsRolling(true);
        const roll = Math.floor(Math.random() * 6) + 1;

        setTimeout(() => {
            setDiceValue(roll);
            setTurnScore(prevTurnScore => prevTurnScore + roll);
            setIsRolling(false);
        }, 500);
    };

    const endTurn = () => {
        // Opdater spillerens score
        onScoreUpdate(currentPlayer.id, turnScore);

        // Reset turn state
        setDiceValue(0);
        setTurnScore(0);

        // Skift til næste spiller
        onEndTurn();
    };

    return (
        <div className="player-turn">
            <h3>{currentPlayer.name}'s Tur</h3>

            <div className="dice-display">
                {diceValue > 0 && <p>Terning: {diceValue}</p>}
                <p>Denne runde: {turnScore} point</p>
            </div>

            <button onClick={rollDice} disabled={isRolling}>
                {isRolling ? 'Kaster...' : 'Kast Terning'}
            </button>

            <button onClick={endTurn} disabled={turnScore === 0}>
                Afslut Tur
            </button>
        </div>
    );
};