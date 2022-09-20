import React from "react";

function CityInfoWeatherCard({ name, item, checked }) {
  const kelvinToCelcius = (kelvin) => {
    const celcius = Math.round((kelvin - 273.15) * 10) / 10 + "°C";
    return celcius;
  };
  const kelvinToFarenheit = (kelvin) => {
    const farenheit = Math.round((1.8 * (kelvin - 273) + 32) * 10) / 10 + "°F";
    return farenheit;
  };

  const chooseAnIcon = (main) => {
    let url;
    switch (main) {
      case "Clear":
        return (url = "https://img.icons8.com/nolan/452/smiling-sun.png");
      case "Clouds":
        return (url = "https://img.icons8.com/nolan/452/clouds.png");
      case "Rain":
        return (url = "https://img.icons8.com/nolan/452/rain.png");
      case "Snow":
        return (url = "https://img.icons8.com/nolan/452/228BE6/snow.png");
      case "Tornado":
        return (url = "https://img.icons8.com/nolan/452/wind.png");
      case "Thunderstorm":
        return (url = "https://img.icons8.com/nolan/452/lightning-bolt.png");
      default:
        return (url = "https://img.icons8.com/nolan/344/sad-sun.png");
    }
  };
  return (
    <div className="citycard">
      <div className="weathericon">
        <img
          style={{ height: "7rem" }}
          src={chooseAnIcon(item?.weather?.[0]?.main)}
        ></img>
      </div>
      <div className="text">
        <div className="city" style={{ marginTop: "-15px" }}>
          {item?.dt_txt}
        </div>
        <div className="temp">
          {`${
            checked === true
              ? kelvinToCelcius(item?.main?.temp)
              : kelvinToFarenheit(item?.main?.temp)
          }`}
        </div>
      </div>
    </div>
  );
}

export default CityInfoWeatherCard;
