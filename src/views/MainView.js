import "./MainView.css";
import CityCard from "../components/CityCard.js";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const MAX_CITIES_COUNT = 4;

function MainView({ setCurView, curView, checked, setChecked }) {
  const [newCities, setNewCities] = useState([]);
  const [cityNameValue, setCityNameValue] = useState([]);
  const localStorageValue = JSON.parse(localStorage.getItem("city"));

  useEffect(() => {
    if (localStorageValue != null) {
      setNewCities(localStorageValue);
      console.log(localStorageValue);
    }
  }, []);

  const clearI = () => {
    if (cityNameValue !== "") {
      setCityNameValue("");
    }
  };

  const addCity = () => {
    if (!!cityNameValue.trim()) {
      if (
        newCities.length < MAX_CITIES_COUNT &&
        (localStorageValue || []).length < MAX_CITIES_COUNT
      ) {
        const tmp = newCities;
        tmp.push(cityNameValue);
        setNewCities([...tmp]);
        localStorage.setItem("city", JSON.stringify(tmp));
      } else {
        alert("Przekroczono limit miast!");
      }
      clearI();
    } else {
      alert("Wpisz nazwę miasta!");
    }
  };

  const DeleteFromBase = (cityName) => {
    const filtered = newCities.filter((item) => item !== cityName);
    setNewCities([...filtered]);
    localStorage.clear();
    localStorage.setItem("city", JSON.stringify(filtered));
    console.log(newCities);
  };

  const Cards = newCities.map((cityName, index) => (
    <CityCard
      DeleteFromBase={DeleteFromBase}
      setCurView={setCurView}
      curView={curView}
      name={cityName}
      newCities={newCities}
      setNewCities={setNewCities}
      isCityForecast={false}
      checked={checked}
      key={index}
    />
  ));
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
        <div className="tempswitch">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>°F</Typography>
            <Switch
              defaultChecked
              checked={checked}
              onChange={handleChange}
              color="secondary"
            />
            <Typography>°C</Typography>
          </Stack>
        </div>
      </div>
      <div className="searching">
        <div className="searchbar">
          <input
            className="searchinput"
            type="text"
            placeholder="Dodaj miasto"
            value={cityNameValue}
            onChange={(e) => setCityNameValue(e.target.value)}
          />
          <button className="addcitybutton">
            <AiOutlinePlus
              size={"1.5rem"}
              style={{ color: "rgb(72, 72, 72)" }}
              onClick={addCity}
            />
          </button>
        </div>
      </div>
      <div className="space">{Cards}</div>
    </div>
  );
}

export default MainView;
