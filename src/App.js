import {useState} from 'react';
import dockerLogo from "./assets/docker.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <a href="https://docs.docker.com/build/guide/multi-stage/" target="_blank">
          <img src={dockerLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Demo Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default App;
