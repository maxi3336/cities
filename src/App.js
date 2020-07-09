import React from 'react'
import style from './App.module.css'
import CitiesContainer from "./components/Cities/CitiesContainer";
import SelectedContainer from "./components/Selected/SelectedContainer";
import SearchContainer from "./components/Search/SearchContainer";

const App = () => {

    return(
        <div>
            <div className={style.bg}/>
            <div className={style.main}>
                <SearchContainer />
                <div className={style.cities}>
                    <CitiesContainer/>
                    <span className={style.scroll}>SCROLL ></span>
                    <SelectedContainer/>
                </div>
            </div>
        </div>
    )
}

export default App