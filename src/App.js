import React from 'react'
import style from './App.module.css'
import Search from "./components/Search/Search";
import Cities from "./components/Cities/Cities";
import Selected from "./components/Selected/Selected";

const App = () => {

    let cities = [
        {id: 1, name: "Екатеринбург", mark:true},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:true},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 2, name: "Москва", mark:false},
        {id: 3, name: "Казань", mark:false}
    ]

    return(
        <div>
            <div className={style.bg}/>
            <div className={style.main}>
                <Search />
                <div className={style.cities}>
                    <Cities cities={cities}/>
                    <span className={style.scroll}>SCROLL ></span>
                    <Selected cities={cities}/>
                </div>
            </div>
        </div>
    )
}

export default App