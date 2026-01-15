import style from "./header.module.scss";

export function Header() {
  return (
    <>
      <header className={style.mainHeader}>
        <h1>DEAD ON DICE</h1>
      </header>
      <div className={style.center}>
        <section className={style.terningOverlay}></section>
      </div>
    </>
  );
}
