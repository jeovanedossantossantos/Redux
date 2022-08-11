import {NUM_MAX_ALTERADO, NUM_MIM_ALTERADO} from './actionTypes'

export const alterarNumeroMinimo = (novoNumero)=>{
    return {
        type: NUM_MIM_ALTERADO,
        payload: novoNumero
    }
}

export const alterarNumeroMaximo = (novoNumero)=>{
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}