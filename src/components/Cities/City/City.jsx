import React from 'react'
import style from './City.module.css'

const City = (props) => {
    return (
        <div className={style.city} onClick={props.click}>
            <h2>{props.name}</h2>
        </div>
    )
}

export default City