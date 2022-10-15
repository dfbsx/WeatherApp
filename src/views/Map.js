import React from 'react'
import { AiOutlineArrowLeft} from "react-icons/ai"
import { useNavigate, useLocation } from "react-router-dom";

function Map() {
let navigate = useNavigate();
  const {state}=useLocation();
  const {name} = state
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
            onClick={()=>navigate(`/${name}`, {state:{name:name}})}
          >
            <AiOutlineArrowLeft />
            Powrót
          </button>
        </div>
      </div>
      <div className="space">{name}</div>
    </div>
  )
}

export default Map