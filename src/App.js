import React from 'react'
import style from './App.module.css'
import Search from "./components/Search/Search";
import Cities from "./components/Cities/Cities";

const App = () => {

    let cities = [
        {id: 1, name: "Екатеринбург"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 2, name: "Москва"},
        {id: 3, name: "Казань"}
    ]

    return(
        <div>
            <div className={style.bg}/>
            <div className={style.main}>
                <Search />
                <Cities cities={cities}/>
                <span className={style.scroll}>SCROLL ></span>
            </div>
        </div>
    )
}

export default App