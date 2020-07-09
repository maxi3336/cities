import React from 'react'
import style from './Search.module.css'

const Search = (props) => {

    let onTextChange = (event) => {
        let newText = event.target.value
        props.updateNewText(newText)
    }

    return (
        <div className={style.search}>
            <input
                className={style.input_city}
                type="text"
                onChange={onTextChange}
                value={props.text}
                placeholder="Название города"
            />
        </div>
    )
}

export default Search