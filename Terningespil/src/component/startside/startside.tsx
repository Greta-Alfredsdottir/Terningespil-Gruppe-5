import style from "./startside.module.scss";

interface modelProp {
  Start: boolean;
  setStart: (Start: boolean) => void;
}

export function StartSide({ Start, setStart }: modelProp) {
  return (
    Start === true && (
      <section className={style.container}>
        <section className={style.startSide}></section>
      </section>
    )
  );
}
