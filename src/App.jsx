import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Blender from "./components/Blender";

const App = () => {
  const [speed, setSpeed] = useState(0);

  return (
    <div className="App">
      <h1>Current State: {speed === 0 ? "Off" : speed}</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Blender speed={speed} position={[-1.2, 0, 0]} />
        <Blender speed={speed} position={[1.2, 0, 0]} />
      </Canvas>
      <div
        className="card"
        style={{ display: "flex", justifyContent: "center", gap: 10 }}
      >
        <button onClick={() => setSpeed(0)}>OFF</button>
        <button onClick={() => setSpeed(1)}>1</button>
        <button onClick={() => setSpeed(2)}>2</button>
        <button onClick={() => setSpeed(3)}>3</button>
      </div>
    </div>
  );
};

export default App;
