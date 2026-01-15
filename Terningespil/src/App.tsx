import "./App.css";
import { useState } from "react";
import { StartSide } from "./component/startside/startside";
import { Header } from "./component/startside/header/header";
import { Footer } from "./component/startside/Footer/footer";


function App() {
  const [Start, setStart] = useState(true);

  return (
    <>
      <Header />
      <StartSide Start={Start} setStart={setStart}></StartSide>
      <Footer />


    </>
  );
}

export default App;
