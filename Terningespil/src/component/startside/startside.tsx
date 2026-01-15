import style from "./startside.module.scss";
import { Game } from "../../Pages/Game";

interface modelProp {
  Start: boolean;
  setStart: (Start: boolean) => void;
}

export function StartSide({ Start }: modelProp) {
  return (
    <section className={style.container}>
      <section className={style.startSide}>
        {Start && (
          <div className={style.gameWrapper}>
            <Game />
          </div>
        )}
      </section>
    </section>
  );
}
