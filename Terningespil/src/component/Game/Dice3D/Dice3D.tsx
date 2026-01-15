import { useState } from "react";
import styles from './Dice3D.module.scss'

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
        <div className={styles.diceWrapper}>
            <div
                className={`${styles.cube} ${styles[`face${value}`]} ${rolling ? styles.rolling : ""}`}
            >
                <div className={`${styles.face} ${styles.faceFront}`}>1</div>
                <div className={`${styles.face} ${styles.faceBack}`}>6</div>
                <div className={`${styles.face} ${styles.faceRight}`}>2</div>
                <div className={`${styles.face} ${styles.faceLeft}`}>5</div>
                <div className={`${styles.face} ${styles.faceTop}`}>3</div>
                <div className={`${styles.face} ${styles.faceBottom}`}>4</div>
            </div>

            <button onClick={rollDice}>Kast terning</button>
        </div>
    );
};
