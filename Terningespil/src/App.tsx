import "./App.css";
import { useState } from "react";
import { StartSide } from "./component/startside/startside";
import { Header } from "./component/startside/header/header";
import { Footer } from "./component/startside/Footer/footer";


function App() {
  const [Start, setStart] = useState(true);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <Header />
      <StartSide Start={Start} setStart={setStart}></StartSide>
      <Footer />
    </div>
  );
}

export default App;
