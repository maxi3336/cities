import React from 'react'
import Search from "./Search";
import {connect} from "react-redux";
import {updateNewTextActionCreatore} from "../../redux/citiesReducer";

const mapStateToProps = (state) => ({text: state.cities.newText})

const mapDispatchToProps = (dispatch) => ({
    updateNewText: (text) => {
        let action = updateNewTextActionCreatore(text)
        dispatch(action)
    }
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer