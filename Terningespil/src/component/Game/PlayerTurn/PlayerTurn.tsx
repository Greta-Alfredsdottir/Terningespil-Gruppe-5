import React, { useState, useEffect, useRef } from "react";
import type { Player, Choice } from "../../types/game";
import style from "./PlayerTurn.module.scss";

interface PlayerTurnProps {
  currentPlayer: Player;
  diceValue: number;
  choice: Choice | null;
  onScoreUpdate: (playerId: number, points: number) => void;
  onEndTurn: () => void;
}

export const PlayerTurn: React.FC<PlayerTurnProps> = ({
  currentPlayer,
  diceValue,
  choice,
  onScoreUpdate,
  onEndTurn,
}) => {
  const [turnScore, setTurnScore] = useState(0);
  const [hasRolled, setHasRolled] = useState(false);
  const previousDiceValueRef = useRef<number>(diceValue);
  const isInitialMount = useRef<boolean>(true);

  useEffect(() => {
    setTurnScore(0);
    setHasRolled(false);
    previousDiceValueRef.current = diceValue;
    isInitialMount.current = true;
  }, [currentPlayer.id]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      previousDiceValueRef.current = diceValue;
      return;
    }

    if (diceValue !== previousDiceValueRef.current && choice !== null) {
      setHasRolled(true);
      // Calculate win/loss based on choice
      const win =
        (choice === "higher" && diceValue > 3) ||
        (choice === "lower" && diceValue <= 3);
      const points = win ? 10 : -5;
      setTurnScore(points);
      previousDiceValueRef.current = diceValue;
    }
  }, [diceValue, choice]);

  const endTurn = () => {
    onScoreUpdate(currentPlayer.id, turnScore);

    setTurnScore(0);
    setHasRolled(false);
    previousDiceValueRef.current = diceValue;
    isInitialMount.current = true;

    onEndTurn();
  };

  const win =
    choice !== null && hasRolled
      ? (choice === "higher" && diceValue > 3) ||
        (choice === "lower" && diceValue <= 3)
      : null;

  return (
    <div className="player-turn">
      <h3>{currentPlayer.name}'s Tur</h3>

      <div className="dice-display">
        {hasRolled && (
          <>
            <p>Terning: {diceValue}</p>
            <p>{win ? "✓ Du vandt!" : "✗ Du tabte!"}</p>
          </>
        )}
        <p>Denne runde: {turnScore} point</p>
      </div>

      <button
        className={style.endTurn}
        onClick={endTurn}
        disabled={!hasRolled || turnScore === 0}
      >
        Afslut Tur
      </button>
    </div>
  );
};
