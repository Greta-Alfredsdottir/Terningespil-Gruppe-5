import './Player.module.scss';
import type { Player as PlayerType } from "../../types/game";

interface PlayerProps {
    player: PlayerType;
}

export const Player = ({ player }: PlayerProps) => {
    return (
        <div className={`player ${player.isTurn ? "active" : ""}`}>
            <h2>{player.name}</h2>
            <p>Score: {player.score}</p>
            {player.isTurn && <p>Din tur!</p>}
        </div>
    );
};
