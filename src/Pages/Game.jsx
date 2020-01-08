import React, {useState} from 'react'
import { Scoreboard } from '../Components/Scoreboard'
import { Buttons } from '../Components/Buttons'

export const Game = ({userName}) =>{
    const [userPoints, setuserPoints] = useState(0);
    const [iaPoints, setiaPoints] = useState(0);

    return(
        <>
            <Scoreboard 
                userName={userName} 
                userPoints={userPoints} 
                iaPoints={iaPoints}
            />
            <Buttons 
                userPoints={userPoints} 
                iaPoints={iaPoints} 
                setUserPoints={setuserPoints} 
                setIaPoints={setiaPoints}
                userName={userName}
            />
        </>
    )
}