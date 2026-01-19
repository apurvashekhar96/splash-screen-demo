import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const removeSpalshScreen = (targetEl) => {
    const bigstar = document.querySelector(".big-star-container");
    const smallStar = document.querySelector(".small-star");
    const spalshText = document.querySelector(".splash-text");

    [bigstar, smallStar].forEach((el) => {
      el.classList.add("fade-before-hide-fast");
    });
    spalshText.classList.add("fade-before-hide-slow");
    targetEl.classList.add("hidden");
  };

  useEffect(() => {
    const targetEl = document.querySelector("#splash");

    const handleAnimationComplete = () => {
      removeSpalshScreen(targetEl);
    };

    if (targetEl) {
      if (window.hasSplashScreenCompleted) {
        removeSpalshScreen(targetEl);
      } else {
        targetEl.addEventListener("animationComplete", handleAnimationComplete);
      }
    }

    sessionStorage.setItem("splashComplete", "false");

    return () => {
      if (targetEl) {
        targetEl.removeEventListener(
          "animationComplete",
          handleAnimationComplete
        );
      }
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
