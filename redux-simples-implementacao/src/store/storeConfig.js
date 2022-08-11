import {createStore, combineReducers} from 'redux'
import numerosReduces from './reducers/numerosReduces'
const reducers = combineReducers({
    
    numeros: numerosReduces
})

function storeConfig(){
    return createStore(reducers)
} 

export default storeConfig