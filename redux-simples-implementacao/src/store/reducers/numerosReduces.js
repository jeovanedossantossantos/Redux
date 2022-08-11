import {NUM_MAX_ALTERADO, NUM_MIM_ALTERADO} from '../actions/actionTypes'

const estadoInicial = {
    min:1,
    max:10
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=estadoInicial, action) {
    // eslint-disable-next-line default-case
    switch (action.type){
        case NUM_MIM_ALTERADO:
            return {
               ...state,
               min: action.payload
            }
        case NUM_MAX_ALTERADO: 
            return {
                ...state,
                max: action.payload
            }

        default:
            return state
    }
   
}