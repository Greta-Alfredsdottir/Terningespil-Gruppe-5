//Not used, replaced with Dice3D

import styles from './Dice.module.scss'

interface DiceProps {
    setDiceValue: (value: number) => void;
}

export const Dice = ({ setDiceValue }: DiceProps) => {
    
    const rollDice = () => {
        const value = Math.floor(Math.random() * 6) + 1;
        setDiceValue(value);
    }

    return (
        <div className={styles.dice}>
            <button onClick={rollDice}>Kast Terning</button>
        </div>
    )
}