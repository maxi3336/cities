import React from 'react'
import style from './City.module.css'

const City = (props) => {
    return (
        <div className={style.city}>
            <h2>{props.name}</h2>
            <div className={"material-icons " + style.dlt} onClick={props.click}>
                delete
            </div>
        </div>
    )
}

export default City