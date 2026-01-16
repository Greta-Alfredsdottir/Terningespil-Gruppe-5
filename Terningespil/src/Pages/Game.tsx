<<<<<<< Updated upstream
import React, { useState, useEffect } from "react";
import { Player } from "../component/Game/Player/Player";
import { PlayerTurn } from "../component/Game/PlayerTurn/PlayerTurn";
import { Dice3D } from "../component/Game/Dice3D/Dice3D";
import { ChoiceButtons } from "../component/Game/ChoiceButtons/ChoiceButtons";
=======
import React, { useState, useEffect, useRef } from 'react';
import { Player } from '../component/Game/Player/Player';
import { PlayerTurn } from '../component/Game/PlayerTurn/PlayerTurn';
import { Dice3D } from '../component/Game/Dice3D/Dice3D';
import {ChoiceButtons} from '../component/Game/ChoiceButtons/ChoiceButtons';
>>>>>>> Stashed changes
import type { Player as PlayerType } from "../component/types/game";
import type { Choice } from "../component/types/game";
import style from "../Pages/Game.module.scss";

export const Game: React.FC = () => {
  const [players, setPlayers] = useState<PlayerType[]>([
    { id: 1, name: "Spiller 1", score: 0, isTurn: true },
    { id: 2, name: "Spiller 2", score: 0, isTurn: false },
  ]);

<<<<<<< Updated upstream
  const [diceValue, setDiceValue] = useState<number>(1);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [hasRolled, setHasRolled] = useState<boolean>(false);
=======
    const [diceValue, setDiceValue] = useState<number>(1);
    const [isRolling, setIsRolling] = useState<boolean>(false);
    const [choice, setChoice] = useState<Choice | null>(null);
    const [hasRolled, setHasRolled] = useState<boolean>(false);
    const animationDurationRef = useRef<number>(1);
>>>>>>> Stashed changes

  const currentPlayer = players.find((p) => p.isTurn)!;

<<<<<<< Updated upstream
  // Reset hasRolled when player changes
  useEffect(() => {
    setHasRolled(false);
    setChoice(null);
    setDiceValue(1);
  }, [currentPlayer.id]);
=======
    // Reset game state when player changes
    useEffect(() => {
        setHasRolled(false);
        setChoice(null);
        setDiceValue(1);
    }, [currentPlayer.id]);
>>>>>>> Stashed changes

  const handleRollDice = () => {
    if (isRolling || !choice || hasRolled) return;

<<<<<<< Updated upstream
    setIsRolling(true);
    const random = Math.floor(Math.random() * 6) + 1;
=======
        animationDurationRef.current = Math.random() * 3 + 1; // Random between 1-4 seconds
        setIsRolling(true);
        const random = Math.floor(Math.random() * 6) + 1;
        
        setTimeout(() => {
            setDiceValue(random);
            setIsRolling(false);
            setHasRolled(true);
        }, animationDurationRef.current * 1000);
    };
>>>>>>> Stashed changes

    setTimeout(() => {
      setDiceValue(random);
      setIsRolling(false);
      setHasRolled(true);
    }, 1000);
  };

<<<<<<< Updated upstream
  const handleScoreUpdate = (playerId: number, points: number) => {
    setPlayers((prevPlayers: PlayerType[]) =>
      prevPlayers.map((p) =>
        p.id === playerId ? { ...p, score: p.score + points } : p
      )
=======
    const handleEndTurn = () => {
        setPlayers((prevPlayers: PlayerType[]) => {
            const currentIndex = prevPlayers.findIndex(p => p.isTurn);
            const nextIndex = (currentIndex + 1) % prevPlayers.length;

            return prevPlayers.map((p, index) => ({
                ...p,
                isTurn: index === nextIndex
            }));
        });
        setDiceValue(1);
        setChoice(null);
        setHasRolled(false);
    };

    return (
        <div className="game">
            <div className="players-container">
                {players.map(player => (
                    <Player key={player.id} player={player} />
                ))}
            </div>

            <PlayerTurn
                currentPlayer={currentPlayer}
                diceValue={diceValue}
                choice={choice}
                onScoreUpdate={handleScoreUpdate}
                onEndTurn={handleEndTurn}
            />
            <Dice3D value={diceValue} isRolling={isRolling} onRoll={handleRollDice} canRoll={choice !== null} animationDuration={animationDurationRef.current} />
            <ChoiceButtons setChoice={setChoice} disabled={hasRolled} />
        </div>
>>>>>>> Stashed changes
    );
  };

  const handleEndTurn = () => {
    setPlayers((prevPlayers: PlayerType[]) => {
      const currentIndex = prevPlayers.findIndex((p) => p.isTurn);
      const nextIndex = (currentIndex + 1) % prevPlayers.length;

      return prevPlayers.map((p, index) => ({
        ...p,
        isTurn: index === nextIndex,
      }));
    });
    // Reset dice, choice, and hasRolled when turn ends
    setDiceValue(1);
    setChoice(null);
    setHasRolled(false);
  };

  return (
    <div className={style.Game}>
      <div className={style.playersContainer}>
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>

      <PlayerTurn
        currentPlayer={currentPlayer}
        diceValue={diceValue}
        choice={choice}
        onScoreUpdate={handleScoreUpdate}
        onEndTurn={handleEndTurn}
      />
      <Dice3D
        value={diceValue}
        isRolling={isRolling}
        onRoll={handleRollDice}
        canRoll={choice !== null}
      />
      <ChoiceButtons setChoice={setChoice} disabled={hasRolled} />
    </div>
  );
};
