import React, { useEffect,useState } from 'react'
import CityCard from "../components/CityCard.js";
import CityInfoWeatherCard from '../components/CityInfoWeatherCard.js';

function CityInfo({setCurView,name,newCities,setNewCities,isCityForecast}) {
  const [cityData, setCityData] = useState()
  useEffect(()=>{
    const fetchData = async() =>  {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&cnt=4&APPID=3b38d9cd69cbc01a769e639cdf78004d`);
      //console.log('res', res);
      const data = await res.json();
      //console.log('data', data);
      setCityData(data)
      
  };
  fetchData();
  
  },[])
  console.log(cityData)
const cityWeather=cityData?.list.map((item)=><CityInfoWeatherCard name={name} cityData={cityData} item={item}/>)
  return (
    <div class="singleview">
      <div class="header">
        <div class="logoname">
          <img class="applogo" src="https://cdn-icons-png.flaticon.com/512/1163/1163712.png"></img>
          <h1 class="appname">Weather <strong>App</strong></h1>
        </div>
      </div>
      <div class="searching">
        <strong>{name}</strong>
        Kod państwa: {cityData?.city?.country}
        Współrzędne:{cityData?.city?.coord?.lat}{cityData?.city?.coord?.lon}
        Populacja:{cityData?.city?.population}
      </div>
      <div class="space">
      {cityWeather}
      </div>
    </div>
  )
}

export default CityInfo