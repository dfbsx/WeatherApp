import "./MainView.css";
import CityCard from "../components/CityCard.js";
import { AiOutlinePlus } from 'react-icons/ai';
import { useEffect, useState } from 'react'

function MainView() {

    const [newCities, setNewCities] = useState([])
    useEffect(()=>{
        const localStorageValue= JSON.parse(localStorage.getItem('city'))
        if(localStorageValue!=null){
        setNewCities(localStorageValue)}
},[])

    const clearI = () => {
        const ival = document.getElementById("nc")
        if (ival.value !== "") {
            ival.value = ""
        }
    }
    const clearAll = () => {
        localStorage.clear()
        setNewCities([])
    }
    const addCity = () => {
        const item = document.getElementById("nc").value
        if (item !== "" && item !== null && item !== '/0'){
            if (newCities.length < 4 && localStorage.length<4) {
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

    const Cards = newCities.map((cityName) => <CityCard name={cityName} newCities={newCities} setNewCities={setNewCities}/>)

    return (
        <div class="singleview">
            <div class="header">
                <div class="logoname">
                    <img class="applogo" src="https://cdn-icons-png.flaticon.com/512/1163/1163712.png"></img>
                    <h1 class="appname">Weather <strong>App</strong></h1>
                </div>
            </div>
            <div class="searching">
                <div class="searchbar">
                    <input class="searchinput" type="text" placeholder="Dodaj miasto" id="nc" />
                    <AiOutlinePlus size={'1.5rem'} style={{ color: "rgb(72, 72, 72)" }} onClick={addCity} />
                </div>
            </div>
            <div class="space">
                {Cards}
            </div>
        </div>
    )
}

export default MainView