import GetLocalState from "./localState/GetLocalState";

const ADD_CITY = 'ADD-CITY'
const REMOVE_CITY = 'REMOVE-CITY'
const UPDATE_TEXT = 'UPDATE-TEXT'

export const cities = require('../../assets/citiesList.json').city

let initialState = {    //Должен считывать города из JSON
    selectedCities: [],
    newText: ''
}

if (GetLocalState() === null) {

    localStorage.setItem('initialState', JSON.stringify(initialState))

} else initialState = GetLocalState()

let setLocalState = (state) => {
    let localStateStr = JSON.stringify(state)
    localStorage.clear()
    localStorage.setItem('localState', localStateStr)
}

const citiesReducer = (state=initialState, action) => {

    let copyState

    switch (action.type) {
        case ADD_CITY:
            let isSelected = false;
            state.selectedCities.map(city => {
                if(city.name === action.name)
                    isSelected = true
            })
            if(!isSelected) {
                copyState = {
                    ...state,
                    selectedCities: [...state.selectedCities, {id: action.id, name: action.name}],
                    newText: ''
                }
                setLocalState(copyState)
                return copyState
            }
            return state

        case REMOVE_CITY:
            copyState = {
                ...state,
                selectedCities: state.selectedCities.filter(city => (city.id !== action.id))
                }
            setLocalState(copyState)
            return copyState

        case UPDATE_TEXT:
            copyState = {
                ...state,
                newText: action.text
            }
            setLocalState(copyState)
            return copyState
    }

    return state
}

export const addCityActionCreator = (id, name) => ({type: ADD_CITY, id:id, name: name})
export const removeCityActionСreator = (id) => ({type: REMOVE_CITY, id:id})
export const updateNewTextActionCreator = (text) => ({type: UPDATE_TEXT, text: text})

export default citiesReducer