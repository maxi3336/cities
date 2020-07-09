import React from 'react'
import style from './Cities.module.css'
import City from "./City/City";

const Cities = (props) => {

    let cities = props.cities.map(city => {

        let click = () => {
            props.addCity(city.id)
        }

        if(!city.mark)
            return <City click = {click} key={city.id} name={city.name}/>
    })

    return (
        <div className={style.content}>
            <div className={style.cities}>
                {cities}
            </div>
        </div>
    )
}

export default Cities