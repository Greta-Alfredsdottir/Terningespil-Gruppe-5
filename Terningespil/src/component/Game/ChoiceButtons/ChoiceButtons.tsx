import './ChoiceButtons.module.scss'

import type { Choice } from "../../types/game";

interface ChoiceButtonsProps {
    setChoice: (choice: Choice) => void;
}


export const ChoiceButtons = ({ setChoice }: ChoiceButtonsProps) => {
    return (
        <div className="choices">
            <button onClick={() => setChoice("higher")}>Højere</button>
            <button onClick={() => setChoice("lower")}>Lavere</button>
        </div>
    )
}