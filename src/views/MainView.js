import "./MainView.css";
import CityCard from "../components/CityCard.js";
import { AiOutlinePlus } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function MainView({ setCurView, curView, checked,setChecked }) {

    const [newCities, setNewCities] = useState([])
   
    useEffect(() => {
        const localStorageValue = JSON.parse(localStorage.getItem('city'))
        if (localStorageValue != null) {
            setNewCities(localStorageValue)
            console.log(localStorageValue)
        }
    }, [])

    const clearI = () => {
        const ival = document.getElementById("nc")
        if (ival.value !== "") {
            ival.value = ""
        }
    }

    const addCity = () => {
        const item = document.getElementById("nc").value
        if (item !== "" && item !== null && item !== '/0') {
            if (newCities.length < 4 && localStorage.length < 4) {
                const tmp = newCities;
                tmp.push(item)
                setNewCities([...tmp])
                localStorage.setItem('city', JSON.stringify(tmp))
            }
            else { alert("Przekroczono limit miast!") }
            clearI()
        }
        else { alert("Wpisz nazwę miasta!") }
    }

    const DeleteFromBase = (cityName) => {
        const filtered = newCities.filter((item) => item !== cityName)
        setNewCities([...filtered])
        localStorage.clear()
        localStorage.setItem('city', JSON.stringify(filtered))
        console.log(newCities)
    }

    const Cards = newCities.map((cityName) =>
        <CityCard
            DeleteFromBase={DeleteFromBase}
            setCurView={setCurView}
            curView={curView}
            name={cityName}
            newCities={newCities}
            setNewCities={setNewCities}
            isCityForecast={false}
            checked={checked}
        />)
        const handleChange = (event) => {
            setChecked(event.target.checked);
          }

    return (
        <div className="singleview">
            <div className="header">
                <div className="logoname">
                    <img className="applogo" src="https://cdn-icons-png.flaticon.com/512/1163/1163712.png"></img>
                    <h1 className="appname">Weather <strong>App</strong></h1>
                </div>
                <div className="tempswitch">
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>°F</Typography>
                        <Switch defaultChecked checked={checked} onChange={handleChange} color="secondary"/>
                        <Typography>°C</Typography>
                    </Stack>

                </div>
            </div>
            <div className="searching">
                <div className="searchbar">
                    <input className="searchinput" type="text" placeholder="Dodaj miasto" id="nc" />
                    <AiOutlinePlus size={'1.5rem'} style={{ color: "rgb(72, 72, 72)" }} onClick={addCity} />
                </div>
            </div>
            <div className="space">
                {Cards}
            </div>
        </div>
    )
}

export default MainView