import styles from "./Dice3D.module.scss";

interface Dice3DProps {
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
