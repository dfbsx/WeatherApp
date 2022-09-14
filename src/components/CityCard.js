import "./CityCard.css"
import { TiDeleteOutline } from 'react-icons/ti';
import { useEffect, useState } from "react";

function CityCard({ name ,newCities,setNewCities,setCurView,DeleteFromBase, isCityForecast}) {
    const [cityData, setCityData] = useState()
    useEffect(() => {
        const fetchData = async() =>  {
            const res = await fetch(isCityForecast?`https://api.openweathermap.org/data/2.5/forecast?q=${name}&cnt=4&APPID=3b38d9cd69cbc01a769e639cdf78004d`:`https://api.openweathermap.org/data/2.5/forecast?q=${name}&cnt=1&APPID=3b38d9cd69cbc01a769e639cdf78004d`);
            //console.log('res', res);
            const data = await res.json();
            //console.log('data', data);
            setCityData(data)
            
        };
        fetchData();
        //console.log(newCities)
    }, [newCities]);

    const KelvinToCelcius=(kelvin)=>{
        const celcius=Math.round((kelvin - 273.15)*10)/10
        return celcius
    }

   

    const ChooseAnIcon=(main)=>{
        let url
        if(main==='Clear')
        {
           url="https://img.icons8.com/nolan/452/smiling-sun.png"
        }
        else if(main==="Clouds")
        {
         url="https://img.icons8.com/nolan/452/clouds.png"
        }
        else if(main==="Rain")
        {
         url="https://img.icons8.com/nolan/452/rain.png"
        }
        else if(main==="Snow")
        {
         url="https://img.icons8.com/nolan/452/228BE6/snow.png"
        }
        else if(main==="Tornado")
        {
            url="https://img.icons8.com/nolan/452/wind.png"
        }
        else if(main==="Thunderstorm")
        {
            url="https://img.icons8.com/nolan/452/lightning-bolt.png"
        }
        else{
            url="https://img.icons8.com/nolan/344/sad-sun.png"
        }

        return url
    }
    return (
        <div class="citycard">
            <div class="weathericon">
                <img style={{ height: '7rem' }} src={ChooseAnIcon(cityData?.list?.[0]?.weather?.[0]?.main)}></img>
            </div>
            <div class="text">
                <div class="city">{name}</div>
                <div class="temp">{KelvinToCelcius(cityData?.list?.[0]?.main?.temp)}°C</div>
            </div>
            <div class="buttons">
                <div class="delete" onClick={()=>DeleteFromBase(name)}>
                    <div class="deletetext">Usuń</div>
                    <TiDeleteOutline size={'1.5rem'} style={{ color: "rgb(72, 72, 72)" }} />
                </div>
                <div class="info">
                    <div class="infobutton" onClick={()=>setCurView(name)}>O mieście</div>
                </div>
            </div>
        </div>
    )
}

export default CityCard