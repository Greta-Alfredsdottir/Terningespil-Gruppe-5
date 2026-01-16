import styles from "./Dice3D.module.scss";

interface Dice3DProps {
<<<<<<< Updated upstream
  value: number;
  isRolling: boolean;
  onRoll: () => void;
  canRoll?: boolean;
}

export const Dice3D = ({
  value,
  isRolling,
  onRoll,
  canRoll = true,
}: Dice3DProps) => {
  return (
    <div className={styles.diceWrapper}>
      <div
        className={`${styles.cube} ${styles[`face${value}`]} ${
          isRolling ? styles.rolling : ""
        }`}
      >
        <div className={`${styles.face} ${styles.faceFront}`}>1</div>
        <div className={`${styles.face} ${styles.faceBack}`}>6</div>
        <div className={`${styles.face} ${styles.faceRight}`}>2</div>
        <div className={`${styles.face} ${styles.faceLeft}`}>5</div>
        <div className={`${styles.face} ${styles.faceTop}`}>3</div>
        <div className={`${styles.face} ${styles.faceBottom}`}>4</div>
      </div>
=======
    value: number;
    isRolling: boolean;
    onRoll: () => void;
    canRoll?: boolean;
    animationDuration?: number;
}

export const Dice3D = ({ value, isRolling, onRoll, canRoll = true, animationDuration = 1 }: Dice3DProps) => {
    const cubeStyle = {
        '--animation-duration': `${animationDuration}s`
    } as React.CSSProperties;

    return (
        <div className={styles.diceWrapper}>
            <div
                className={`${styles.cube} ${styles[`face${value}`]} ${isRolling ? styles.rolling : ""}`}
                style={cubeStyle}
            >
                <div className={`${styles.face} ${styles.faceFront}`}>1</div>
                <div className={`${styles.face} ${styles.faceBack}`}>6</div>
                <div className={`${styles.face} ${styles.faceRight}`}>2</div>
                <div className={`${styles.face} ${styles.faceLeft}`}>5</div>
                <div className={`${styles.face} ${styles.faceTop}`}>3</div>
                <div className={`${styles.face} ${styles.faceBottom}`}>4</div>
            </div>
>>>>>>> Stashed changes

      <button
        className={styles.kastTerning}
        onClick={onRoll}
        disabled={isRolling || !canRoll}
      >
        {isRolling ? "Kaster..." : "Kast terning"}
      </button>
    </div>
  );
};
