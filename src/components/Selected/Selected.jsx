import React from 'react'
import style from './Selected.module.css'
import City from "./City/City";

const Selected = (props) => {
    let cities = props.cities.map(city => {
        if(city.mark)
            return <City name={city.name}/>
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