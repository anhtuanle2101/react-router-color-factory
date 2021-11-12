import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Home from "./Home"
import ColorDetails from "./ColorDetails";
import { useState } from "react";
import ColorNew from "./ColorNew"

function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/colors">
            <Route path="" element={<Home colors={colors}/>}/>
            <Route path=":color" element={<ColorDetails colors={colors}/>} />
            <Route path="new" element={<ColorNew setColors={setColors}/>}/>
          </Route>
          <Route path="*" element={<Navigate replace to="/colors" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
