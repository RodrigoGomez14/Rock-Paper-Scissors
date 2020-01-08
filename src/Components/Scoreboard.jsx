import React from 'react'
import {VS,Container,User,Ia} from './styles/Scoreboard'
export const Scoreboard = ({userName,userPoints,iaPoints}={}) =>{
    return(
        <div className="row ">
            <Container className="container-fluid">
                <div className="row">
                    <User className="col text-center px-5 py-5">
                        <h1>
                            {userName}
                        </h1>
                        <hr/>
                        <h1>
                            {userPoints}
                        </h1>
                    </User>
                    <Ia className="col text-center px-5 py-5">
                        <h1>
                            I.A
                        </h1>
                        <hr/>
                        <h1>
                            {iaPoints}
                        </h1>
                    </Ia>
                </div>
                <VS>V S</VS>
            </Container>
        </div>
    )
}