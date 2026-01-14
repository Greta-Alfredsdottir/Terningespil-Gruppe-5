import './Dice.module.scss'
interface DiceProps {
    setDiceValue: (value: number) => void;
}

export const Dice = ({ setDiceValue }: DiceProps) => {
    
    const rollDice = () => {
        const value = Math.floor(Math.random() * 6) + 1;
        setDiceValue(value);
    }



    return (
        <div className='dice'>
            <button onClick={rollDice}>Kast Terning</button>
        </div>
    )
}