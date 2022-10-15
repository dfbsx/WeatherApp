import React  from 'react'
import { AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate, useLocation } from "react-router-dom";
import "./Map.css";

function Map() {
let navigate = useNavigate();
const {state}=useLocation();
const {name,lon,lat} = state

  return (
    <div className="singleview">
      <div className="header">
        <div className="logoname">
          <img
            className="applogo"
            src="https://cdn-icons-png.flaticon.com/512/1163/1163712.png"
          ></img>
          <h1 className="appname">
            Weather <strong>App</strong>
          </h1>
        </div>
        <div className="return">
          <button
            className="returnbutton"
            onClick={()=>{navigate(`/forecast`, {state:{name:name}})}}
          >
            <AiOutlineArrowLeft />
            Powrót
          </button>
        </div>
      </div>
      <div className="space">
           <iframe className='weathermap' src={`https://map.worldweatheronline.com/temperature?lat=${lat}&lng=${lon}&zoom=7`}></iframe>
           <h3>Źródło mapy: <a className="link" href="https://map.worldweatheronline.com/">https://map.worldweatheronline.com/</a></h3>
        </div>
    </div>
  )
}

export default Map