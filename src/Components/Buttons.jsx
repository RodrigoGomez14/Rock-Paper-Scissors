import React, {useState} from 'react'
import {Button , FeedBack} from './styles/Buttons'
import {FaHandRock, FaHandPaper, FaHandScissors} from 'react-icons/fa'

export const Buttons = ({iaPoints,userPoints,setIaPoints,setUserPoints,userName}) =>{
    const [feedBack, setFeedBack] = useState(undefined)
    const calcularGanador = (userElection) => {
        const iaElection = setIaElection()
        if(userElection!==iaElection){
            activeButton(iaElection,true)
            if(userElection==='Rock'){
                if(iaElection==='Paper'){
                    setIaPoints(++iaPoints)
                    setFeedBack('Gana I.A.')
                }
                else{
                    setUserPoints(++userPoints)
                    setFeedBack('Gana '+userName)
                }
            }
            else if(userElection==='Paper'){
                if(iaElection==='Rock'){
                    setUserPoints(++userPoints)
                    setFeedBack('Gana '+userName)
                }
                else{
                    setIaPoints(++iaPoints)
                    setFeedBack('Gana I.A.')
                }
            }
            else{
                if(iaElection==='Rock'){
                    setIaPoints(++iaPoints)
                    setFeedBack('Gana I.A.')
                }
                else{
                    setUserPoints(++userPoints)
                    setFeedBack('Gana '+userName)
                }
            }
        }
        else{
            setFeedBack('Empate')
        }
        setTimeout(() => {
            setFeedBack(undefined)
        }, 2000);
    }
    const setIaElection = () =>{
        switch (Math.trunc(Math.random()*3)) {
            case 0:
                return 'Rock'
            case 1:
                return 'Paper'
            case 2:
                return 'Scissors'
            default:
                break;
        }
    }
    const activeButton = (id,iaElection=false) =>{
        let element = document.getElementById(id)
        const clase = element.className
        element.className=`${clase} active${iaElection?'-ia':''}`
        setTimeout(() => {
            element.className=clase
        }, 1000);

    }
    return(
        <>  
            {feedBack?
                <FeedBack className="row">
                    <div className="col-6 offset-3">
                        <div class="alert alert-primary" role="alert">
                            {feedBack}
                        </div>
                    </div>
                </FeedBack>
                :
                null
            }
            <div className="row">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-around">
                        <div className="col-auto">
                            <Button className='p-4' id='Rock'>
                                <FaHandRock size='100px' onClick={e=>{
                                    activeButton('Rock')
                                    calcularGanador('Rock')
                                }}/>
                            </Button>
                        </div>
                        <div className="col-auto">
                            <Button className='p-4' id='Paper'>
                                <FaHandPaper size='100px' onClick={e=>{
                                    activeButton('Paper')
                                    calcularGanador('Paper')
                                }}/>
                            </Button>
                        </div>
                        <div className="col-auto">
                            <Button className='p-4' id='Scissors'>
                                <FaHandScissors size='100px' onClick={e=>{
                                    activeButton('Scissors')
                                    calcularGanador('Scissors')
                                }}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}