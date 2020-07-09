import {connect} from "react-redux";
import Cities from "./Cities";
import {addCityActionCreator, cities} from "../../redux/reducers/citiesReducer";

const mapStateToProps = (state) => ({cities: cities, newText: state.cities.newText})

const mapDispatchToProps = (dispatch) => {

    let showCity = (text, name) => {
        let newName = ''
        for(let i = 0; i < text.length; i++) {
            newName += name[i]
        }

        if(newName === text)
             return true

        return false
    }

    return {
        addCity: (id, name) => {
            let action = addCityActionCreator(id, name)
            dispatch(action)
        },
        showCity: showCity
    }
}

const CitiesContainer = connect(mapStateToProps, mapDispatchToProps)(Cities)

export default CitiesContainer