const ADD_CITY = 'ADD-CITY'
const REMOVE_CITY = 'REMOVE-CITY'
const UPDATE_TEXT = 'UPDATE-TEXT'

let initialState = {    //Должен считывать города из JSON
    cities: [
        {id: 1, name: "Екатеринбург", mark:true},
        {id: 2, name: "Москва", mark:false},
        {id: 3, name: "Казань", mark:false},
    ],
    newText: ''
}

const citiesReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                cities: state.cities.map(city => {
                    if(city.id === action.id)
                        return {...city, mark: !city.mark}
                    return city
                })
            }

        case REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.map(city => {
                    if(city.id === action.id)
                        return {...city, mark: !city.mark}
                    return city
                })
            }

        case UPDATE_TEXT:
            return {
                ...state,
                newText: action.text
            }

    }

    return state
}

export const addCityActionCreator = (id) => ({type: ADD_CITY, id:id})
export const removeCityActioncreator = (id) => ({type: REMOVE_CITY, id:id})
export const updateNewTextActionCreatore = (text) => ({type: UPDATE_TEXT, text: text})

export default citiesReducer