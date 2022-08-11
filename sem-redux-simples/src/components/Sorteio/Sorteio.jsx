import React from 'react'
import {Card} from "../index"
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const {min,max} = props
    const aleatorio = parseInt(Math.random()*(max-min)) + min
    return (
        <Card title="Sorteio dos Número" purple >
        <div>
            <span>
                <strong>Resultado{" "}</strong>
                <strong>{aleatorio}</strong>
               
            </span>
           
        </div>

    </Card>
    )
}