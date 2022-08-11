import React from 'react'
import {Card} from "../index"
import {connect} from "react-redux"
// eslint-disable-next-line import/no-anonymous-default-export
const Soma = (props) =>{
    const {min, max} = props
    
   
    return (
        <Card title="Soma dos Número" green >
        <div>
            <span>
                <strong>Resultado{" "}</strong>
                <strong>{(Number(max)+Number(min))}</strong>
               
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
export default connect(mapStateToProps)(Soma)