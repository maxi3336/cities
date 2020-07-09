import React from 'react'
import Selected from "./Selected";
import {connect} from "react-redux";
import {addCityActionCreator, removeCityActioncreator} from "../../redux/citiesReducer";

const mapStateToProps = (state) => ({cities: state.cities.cities})

const mapDispatchToProps = (dispatch) => {
    return {
        removeCity: (id) => {
            const action = removeCityActioncreator(id)
            dispatch(action)
        }
    }
}

const SelectedContainer = connect(mapStateToProps, mapDispatchToProps)(Selected)

export default SelectedContainer