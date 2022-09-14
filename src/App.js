import "./App.css"
import './views/MainView.js'
import MainView from './views/MainView.js';
import {useState} from 'react'
import CityInfo from './views/CityInfo.js'

function App() {
  const [curView,setCurView]=useState('MainView')
  return (
    <div className="App">
      {curView==='MainView'?<MainView curView={curView} setCurView={setCurView}/>:<CityInfo/>}
    </div>
  );
}

export default App;
