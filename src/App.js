import "./App.css"
import './views/MainView.js'
import MainView from './views/MainView.js';
import {useState} from 'react'
import CityInfo from './views/CityInfo.js'
import Map from './views/Map.js'
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [curView,setCurView]=useState('MainView')
  const[checked,setChecked]=useState(true)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainView checked={checked} setChecked={setChecked} curView={curView} setCurView={setCurView}/>}/>
        <Route path={`/forecast`} element={<CityInfo checked={checked} setChecked={setChecked} setCurView={setCurView} />} />
        <Route path={`/map`} element={<Map />}/>
      </Routes>
    </div>
  );
}

export default App;
