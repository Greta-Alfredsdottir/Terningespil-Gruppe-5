import { useState } from "react";
import { Dice } from "../component/Game/Dice/Dice";
import { ChoiceButtons } from "../component/Game/ChoiceButtons/ChoiceButtons";
import { Result } from "../component/Game/Result/Result";
import { Player } from "../component/Game/Player/Player";
import type { Choice, Player as PlayerType } from "../component/types/game";

export const Game = () => {
    const [choice, setChoice] = useState<Choice | null>(null);
    const [diceValue, setDiceValue] = useState<number | null>(null);
            // det er ikke en fejl det er bare en advarsel siden der ikke er blevet lavet skifte tur og score logik endnu
    const [players, setPlayers] = useState<PlayerType[]>([
        { name: "Spiller 1", score: 0, isTurn: true },
        { name: "Spiller 2", score: 0, isTurn: false },
    ]);

    return (
        <section>
            {players.map((p, i) => (
                <Player key={i} player={p} />
            ))}
            <ChoiceButtons setChoice={setChoice} />
            <Dice setDiceValue={setDiceValue} />
            <Result choice={choice} diceValue={diceValue} />
        </section>
    );
};
