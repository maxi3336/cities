import Search from "./Search";
import {connect} from "react-redux";
import {updateNewTextActionCreator} from "../../redux/reducers/citiesReducer";

const mapStateToProps = (state) => ({text: state.cities.newText})

const mapDispatchToProps = (dispatch) => ({
    updateNewText: (text) => {
        if (text) text = text[0].toUpperCase() + text.slice(1)
        let action = updateNewTextActionCreator(text)
        dispatch(action)
    }
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer