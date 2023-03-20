import React from 'react';
import { Button} from "@mui/material";

export default function App({event}){
    console.log(event);
    return(
        <div className='card'>
            <img src={event.img}/>
            <div className='card-body'>
                <h3>{event.title}</h3>
                <p>Congrats! Your changes has been made</p>
                <Button variant="outlined">Back to Home</Button>
            </div>
        </div>
    )
}