import { React, useEffect, useState } from "react";
import CityInfoWeatherCard from "../components/CityInfoWeatherCard.js";
import "./CityInfo.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi"
import { useNavigate, useLocation } from "react-router-dom";


function CityInfo({ setCurView, checked }) {
  let navigate = useNavigate();
  const {state}=useLocation();
  const {name} = state
  const [cityData, setCityData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${name}&cnt=4&APPID=3b38d9cd69cbc01a769e639cdf78004d`
      );
      //console.log('res', res);
      const data = await res.json();
      //console.log('data', data);
      setCityData(data);
    };
    fetchData();
  }, []);
  const cityWeather = cityData?.list?.map((item,index) => (
    <CityInfoWeatherCard
      name={name}
      cityData={cityData}
      item={item}
      checked={checked}
      key={index}
    />
  ));

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
              onClick={()=>navigate("/")}
            >
              <AiOutlineArrowLeft />
              Powrót
            </button>
            <button
            className="returnbutton"
            onClick={()=>{
              navigate(`/map`, 
              {state:{name:name, lon:cityData?.city?.coord?.lon, lat:cityData?.city?.coord?.lat}})
            }
          }
          >
            <FiMapPin />
            Mapa
          </button>
        </div>
      </div>
      <div className="cityinfo">
        <strong className="cityname">{name}</strong>
        <div className="detail">
          Kod państwa: <strong>{cityData?.city?.country}</strong>
        </div>
        <div className="detail">
          Współrzędne: <strong>{cityData?.city?.coord?.lat}(λ)</strong>{" "}
          <strong>{cityData?.city?.coord?.lon}(φ)</strong>
        </div>
        <div className="detail">
          Populacja: <strong>{cityData?.city?.population}</strong>
        </div>
      </div>
      <div className="space">{cityWeather}
      </div>
    </div>
  );
}

export default CityInfo;
