import { useState } from "react";
import { ChoiceButtons } from "../component/Game/ChoiceButtons/ChoiceButtons";
import { Dice } from "../component/Game/Dice/Dice";
import { Result } from "../component/Game/Result/Result";
import type { Choice } from "../component/types/game";

export const Game = () => {
    const [choice, setChoice] = useState<Choice | null>(null);
    const [diceValue, setDiceValue] = useState<number | null>(null);

    return (
        <section>
            <ChoiceButtons setChoice={setChoice} />
            <Dice setDiceValue={setDiceValue} />
            <Result choice={choice} diceValue={diceValue} />
        </section>
    );
};
