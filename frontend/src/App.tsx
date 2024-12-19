import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

interface GameResult {
  className: string,
  message: string
}

function App() {
  const [saludo, setSaludo] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [gameResult, setGameResult] = useState<GameResult>({ className: "", message: "" });

  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const VITE_BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
  const VITE_ENV_TYPE = import.meta.env.VITE_ENV_TYPE;
  const VITE_NAME = import.meta.env.VITE_NAME;

  const fetch = async (): Promise<void> => {
    try {
      const url = `${VITE_BACKEND_URL}:${VITE_BACKEND_PORT}/${VITE_NAME}`;

      console.log(`Haciendo llamada al backend: ${url}`);

      const resp = await axios.get(url);

      const { message, number } = resp.data;

      setSaludo(message);
      setNumber(number);
      const result = !Boolean(number % 3);

      const gameResult: GameResult = {
        className: result ? 'winner' : 'looser',
        message: result ? '¡Ganaste!' : 'Inténtalo de nuevo :)'
      }

      setGameResult(gameResult);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main>
      <div className="saludo">
        <h1>¡Bienvenido!</h1>
        <p>El frontend está en entorno de <b>{VITE_ENV_TYPE}</b> :)</p>
      </div>
      <div className="backendResponse">
        <p><b>El backend responde:</b></p>
        <p>{saludo}</p>
      </div>
      <div className="game">
        <p><b>Si el número es multiplo de 3 ganas</b></p>
        <div className="number">
          {number}
        </div>
        <div className="result">
          <h1 className={gameResult.className}>{gameResult.message}</h1>
        </div>
      </div>
      <button onClick={fetch}>Jugar otra vez</button>
    </main>
  )
}

export default App
