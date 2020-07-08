import React from 'react'
import style from './Search.module.css'

const Search = (props) => {
    return (
        <div className={style.search}>
            <input className={style.input_city} type="text" placeholder="Название города"/>
            <button className={style.btn}>
                <span className="material-icons">search</span>
            </button>
        </div>
    )
}

export default Search