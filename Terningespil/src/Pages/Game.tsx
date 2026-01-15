import React, { useState } from 'react';
import { Player } from '../component/Game/Player/Player';
import { PlayerTurn } from '../component/Game/PlayerTurn/PlayerTurn';
import { ChoiceButtons } from '../component/Game/ChoiceButtons/ChoiceButtons';
import type { Player as PlayerType } from "../component/types/game";
import type { Choice } from "../component/types/game";

export const Game: React.FC = () => {
    const [players, setPlayers] = useState<PlayerType[]>([
        { id: 1, name: 'Spiller 1', score: 0, isTurn: true },
        { id: 2, name: 'Spiller 2', score: 0, isTurn: false }
    ]);
    const [choice, setChoice] = useState<Choice | null>(null);

    const currentPlayer = players.find(p => p.isTurn)!;

    const handleScoreUpdate = (playerId: number, points: number) => {
        setPlayers(players.map(p =>
            p.id === playerId
                ? { ...p, score: p.score + points }
                : p
        ));
    };

    const handleEndTurn = () => {
        const currentIndex = players.findIndex(p => p.isTurn);
        const nextIndex = (currentIndex + 1) % players.length;

        setPlayers(players.map((p, index) => ({
            ...p,
            isTurn: index === nextIndex
        })));
    };

    return (
        <div className="game">
            <div className="players-container">
                {players.map(player => (
                    <Player key={player.id} player={player} />
                ))}
            </div>

            <ChoiceButtons setChoice={setChoice} />
            {choice && <p>Valgt: {choice === "higher" ? "Højere" : "Lavere"}</p>}

            <PlayerTurn
                currentPlayer={currentPlayer}
                onScoreUpdate={handleScoreUpdate}
                onEndTurn={handleEndTurn}
            />
        </div>
    );
};