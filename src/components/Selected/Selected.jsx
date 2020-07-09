import React from 'react'
import style from './Selected.module.css'
import City from "./City/City";

const Selected = (props) => {

    let cities = props.cities.map(city => {

        let click = () => {
            props.removeCity(city.id)
        }

        if(city.mark)
            return <City click={click} key={city.id} name={city.name}/>
    })

    return (
        <div className={style.content}>
            <div className={style.cities}>
                {cities}
            </div>
        </div>
    )
}

export default Selected