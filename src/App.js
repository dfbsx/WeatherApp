import "./App.css"
import './views/MainView.js'
import MainView from './views/MainView.js';
import {useState} from 'react'
import CityInfo from './views/CityInfo.js'

function App() {
  const [curView,setCurView]=useState('MainView')
  const[checked,setChecked]=useState(true)
  return (
    <div className="App">
      {curView==='MainView'?<MainView checked={checked} setChecked={setChecked} curView={curView} setCurView={setCurView}/>:<CityInfo checked={checked} setChecked={setChecked} setCurView={setCurView} name={curView}/>}
    </div>
  );
}

export default App;
