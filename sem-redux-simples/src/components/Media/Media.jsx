import React from 'react'
import {Card} from "../index"
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const {min,max} = props
 
    return (
        <Card title="Médias dos Número" blue >
        <div>
            <span>
                <strong>Resultado{" "}</strong>
                <strong>{(Number(min)+Number(max))/2}</strong>
              
            </span>
           
        </div>

    </Card>
    )
}