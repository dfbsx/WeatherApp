import React from 'react'

function CityInfoWeatherCard({name, item}) {
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
        <img style={{ height: '7rem' }} src={ChooseAnIcon(item?.weather?.[0]?.main)}></img>
    </div>
    <div class="text">
        <div class="city" style={{ marginTop: '-15px' }}>{item.dt_txt}</div>
        <div class="temp">{KelvinToCelcius(item?.main?.temp)}°C</div>
    </div>
</div>
  )
}

export default CityInfoWeatherCard