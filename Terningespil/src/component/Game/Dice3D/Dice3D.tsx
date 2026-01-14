import { useState } from "react";
import './Dice3D.module.scss'

export const Dice3D = () => {
    const [value, setValue] = useState(1);
    const [rolling, setRolling] = useState(false);

    const rollDice = () => {
        if (rolling) return;

        setRolling(true);

        const random = Math.floor(Math.random() * 6) + 1;

        setTimeout(() => {
            setValue(random);
            setRolling(false);
        }, 1000);
    };

    return (
        <div className="dice-wrapper">
            <div
                className={`cube face-${value} ${rolling ? "rolling" : ""}`}
            >
                <div className="face front">1</div>
                <div className="face back">6</div>
                <div className="face right">2</div>
                <div className="face left">5</div>
                <div className="face top">3</div>
                <div className="face bottom">4</div>
            </div>

            <button onClick={rollDice}>Kast terning</button>
        </div>
    );
};
