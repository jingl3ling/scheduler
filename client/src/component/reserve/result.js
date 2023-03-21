import React from 'react';
import { Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function App({event}){
    const navigate = useNavigate();
    return(
        <div className='card'>
            <img src={event.img}/>
            <div className='card-body'>
                <h3>{event.title}</h3>
                <p>Congrats! Your changes has been made</p>
                <Button variant="outlined" onClick={(e)=>navigate('/')}>Back to Home</Button>
            </div>
        </div>
    )
}