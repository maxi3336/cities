import React from 'react'
import {connect} from "react-redux";
import Cities from "./Cities";
import {addCityActionCreator} from "../../redux/citiesReducer";

const mapStateToProps = (state) => ({cities: state.cities.cities})

const mapDispatchToProps = (dispatch) => {
    return {
        addCity: (id) => {
            let action = addCityActionCreator(id)
            dispatch(action)
        }
    }
}

const CitiesContainer = connect(mapStateToProps, mapDispatchToProps)(Cities)

export default CitiesContainer