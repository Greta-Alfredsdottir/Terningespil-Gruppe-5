import style from "./startside.module.scss";

interface modelProp {
  Start: boolean;
  setStart: (Start: boolean) => void;
}

export function StartSide({ Start, setStart }: modelProp) {
  return (
    Start === true && (
      <section className={style.minButton}>
        <button onClick={() => setStart(true)}>Start spil</button>
      </section>
    )
  );
}
