import "./CityCard.css";
import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CityCard({
  name,
  newCities,
  setNewCities,
  setCurView,
  DeleteFromBase,
  isCityForecast,
  checked,
}) {
  const [cityData, setCityData] = useState();
  const [tempOpt, setTempOpt] = useState(true);
  const navigate = useNavigate();
  const temperature = cityData?.list?.[0]?.main?.temp;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${name}&cnt=${
          isCityForecast ? "4" : "1"
        }&APPID=3b38d9cd69cbc01a769e639cdf78004d`
      );
      //console.log('res', res);
      const data = await res.json();
      //console.log('data', data);
      setCityData(data);
    };
    fetchData();
  }, [newCities]);

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
  const toNextView = () => {
    setCurView(name);
    //setTempOpt(checked);
    console.log(checked);
    console.log("Przekazana");
    console.log(tempOpt);
    navigate(`/${name}`, {state:{name:name}});
  };
  return (
    <div className="citycard">
      <div className="weathericon">
        <img
          style={{ height: "7rem" }}
          src={chooseAnIcon(cityData?.list?.[0]?.weather?.[0]?.main)}
        ></img>
      </div>
      <div className="text">
        <div className="city">{name}</div>
        <div className="temp">
          {`${
            checked === true
              ? kelvinToCelcius(temperature)
              : kelvinToFarenheit(temperature)
          }`}
        </div>
      </div>
      <div className="buttons">
        <div className="delete" onClick={() => DeleteFromBase(name)}>
          <div className="deletetext">Usuń</div>
          <TiDeleteOutline
            size={"1.5rem"}
            style={{ color: "rgb(72, 72, 72)" }}
          />
        </div>
        <div className="info">
              <div className="infobutton" onClick={toNextView}>
                O mieście
              </div>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
