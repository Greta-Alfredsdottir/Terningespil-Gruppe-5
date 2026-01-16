import style from "./footer.module.scss";

interface FooterProps {
  setStart: (Start: boolean) => void;
  Start: boolean;
}

export function Footer({ setStart, Start }: FooterProps) {
  return (
    <>
    {/* Ternary operator to show start or stop button */}
    {Start === false && (
        <button className={style.minButton} onClick={() => setStart(true)}>
        Start spil
      </button>
    )}
    {Start === true && (
      <button className={style.minButton} onClick={() => setStart(false)}> 
        Stop spillet
      </button>
    )}
    </>
  );
}
