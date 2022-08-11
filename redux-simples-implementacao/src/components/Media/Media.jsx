import React from 'react'
import {Card} from "../index"
import {connect} from 'react-redux'
// eslint-disable-next-line import/no-anonymous-default-export
const Media = (props) =>{
    const {min, max} = props

    return (
        <Card title="Médias dos Número" blue >
        <div>
            <span>
                <strong>Resultado{" "}</strong>
                <strong>{(Number(max)+Number(min))/2}</strong>
              
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
export default connect(mapStateToProps)(Media)