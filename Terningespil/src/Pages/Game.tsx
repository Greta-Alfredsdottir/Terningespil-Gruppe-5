import React, { useState } from 'react';
import { Player } from '../component/Game/Player/Player';
import { PlayerTurn } from '../component/Game/PlayerTurn/PlayerTurn';
import { Dice3D } from '../component/Game/Dice3D/Dice3D';
import type { Player as PlayerType } from "../component/types/game";

export const Game: React.FC = () => {
    const [players, setPlayers] = useState<PlayerType[]>([
        { id: 1, name: 'Spiller 1', score: 0, isTurn: true },
        { id: 2, name: 'Spiller 2', score: 0, isTurn: false }
    ]);

    const currentPlayer = players.find(p => p.isTurn)!;

    const handleScoreUpdate = (playerId: number, points: number) => {
            setPlayers((prevPlayers: PlayerType[]) => prevPlayers.map(p =>
            p.id === playerId
                ? { ...p, score: p.score + points }
                : p
        ));
    };

    const handleEndTurn = () => {
        setPlayers((prevPlayers: PlayerType[]) => {
            const currentIndex = prevPlayers.findIndex(p => p.isTurn);
            const nextIndex = (currentIndex + 1) % prevPlayers.length;

            return prevPlayers.map((p, index) => ({
                ...p,
                isTurn: index === nextIndex
            }));
        });
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
                onScoreUpdate={handleScoreUpdate}
                onEndTurn={handleEndTurn}
            />
            <Dice3D />
        </div>
    );
};