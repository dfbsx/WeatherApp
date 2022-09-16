import React from 'react'

function CityInfoWeatherCard({name, item,checked}) {
    const KelvinToCelcius=(kelvin)=>{
        const celcius=Math.round((kelvin - 273.15)*10)/10 + "°C"
        return celcius
    }
    const KelvinToFarenheit = (kelvin) => {
        const farenheit = Math.round(((1.8 * (kelvin - 273)) + 32) * 10) / 10 + "°F"
        return farenheit
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
    <div className="citycard">
    <div className="weathericon">
        <img style={{ height: '7rem' }} src={ChooseAnIcon(item?.weather?.[0]?.main)}></img>
    </div>
    <div className="text">
        <div className="city" style={{ marginTop: '-15px' }}>{item?.dt_txt}</div>
        <div className="temp">
            {`${checked === true ? KelvinToCelcius(item?.main?.temp) : KelvinToFarenheit(item?.main?.temp)}`}
            
            </div>
    </div>
</div>
  )
}

export default CityInfoWeatherCard