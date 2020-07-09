import Selected from "./Selected";
import {connect} from "react-redux";
import {removeCityActionСreator} from "../../redux/reducers/citiesReducer";

const mapStateToProps = (state) => ({cities: state.cities.selectedCities})

const mapDispatchToProps = (dispatch) => {
    return {
        removeCity: (id) => {
            const action = removeCityActionСreator(id)
            dispatch(action)
        }
    }
}

const SelectedContainer = connect(mapStateToProps, mapDispatchToProps)(Selected)

export default SelectedContainer