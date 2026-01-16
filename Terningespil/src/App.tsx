import "./App.css";
import { useState, useEffect, useRef } from "react";
import { StartSide } from "./component/startside/startside";
import { Header } from "./component/startside/header/header";
import { Footer } from "./component/startside/Footer/footer";
function App() {
  const [Start, setStart] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio effect for background music
  useEffect(() => {
    // Create audio element once
    audioRef.current = new Audio('/sound/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1; 
    
    //play audio when component mounts
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const playOnInteraction = () => {
          if (audioRef.current) {
            audioRef.current.play().catch(() => {});
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          }
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
      });
    }

    // Cleanup when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);


  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <Header />

      <StartSide Start={Start} setStart={setStart} />
      
      <Footer setStart={setStart} Start={Start} />
    </div>
  );
}

export default App;
