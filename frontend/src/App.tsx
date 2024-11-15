import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [saludo, setSaludo] = useState<string>("");

  const fetch = async (): Promise<void> => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/Johnnnnnnnn`;

      const resp = await axios.get(url);
      
      setSaludo(resp.data.message);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1>Bienvenido</h1>
      <p>{saludo}</p>
    </>
  )
}

export default App
