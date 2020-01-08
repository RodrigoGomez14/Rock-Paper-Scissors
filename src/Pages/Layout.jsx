import React, {useState} from 'react'
import {Container} from './style'
import {Game} from './Game'
import {Login} from './Login'
export const Layout = () =>{
    const [userName, setuserName] = useState(undefined);
    return(
        <Container className="container-fluid">
            <div className="row">
                <div className="col-auto ml-auto mr-auto">
                    <h3>Piedra Papel o Tijera</h3>
                </div>
            </div>
            {userName?
                <Game userName={userName}/>
                :
                <Login setuserName={setuserName}/>
            }
        </Container>
    )
}