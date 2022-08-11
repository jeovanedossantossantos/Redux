import './Intervalo.style.css'
import React from 'react'
import Card from '../Card/Card'
import {connect} from "react-redux"
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../../store/actions/numeros'
// eslint-disable-next-line import/no-anonymous-default-export
const Intervalo=(props) => {

    const {max, min} = props
//    props.alterarMinimo(1000)
    return (
        <Card title="Intervalo de Número" red >
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input 
                    type="number" 
                    value={min} 
                    onChange={e=>props.alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input 
                    type="number" 
                    value={max} 
                    onChange={e=>props.alterarMaximo(+e.target.value)}
                    />
                </span>
            </div>
   
        </Card>
    )
}

const mapStateToProps = (state)=>{
   
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }

}

const mapDispatchToProps = (dispatch)=>{
    return {
        alterarMinimo(novoNumero){
            const action=alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero){
            const action=alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Intervalo)