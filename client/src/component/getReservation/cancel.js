import React, {useState} from 'react';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function App({event,res_id, dt_id, Date, Time, Quantity, setCancel, i}){
    const [canceled, setCanceled] = useState(false);
    const navigate = useNavigate();

    const optionNo = ()=>{
        setCancel((prev)=>[prev[i]=false,...prev])
    }

    const optionYes = async() =>{
        const req={
            dt_id: dt_id,
            res_id:res_id,
            quantity: Quantity,
            type:'cancel'
        }
        const result = await fetch(`http://localhost:9000/schedule/modify`,
        {method:"PUT", headers:{"Content-Type":"application/json"},body:JSON.stringify(req)});
        setCanceled(true)
    }
    
    return(
    <React.Fragment>
        {canceled==true?
        <div className='card-body'>
            <p>Your Reservation has been canceled</p>
            <div className='flex-box'>
            <Button variant="outlined" color="secondary" onClick={(e)=>navigate('/')}>OK</Button>
            </div>
        </div>
        :
        <div className='card-body'>
            <p>Are you sure you want to cancel reservation for <strong>{event.title} </strong> 
            on {Date} {Time} for 
            {Quantity} people?
            </p>
            <div className='flex-box'>
            <Button variant="outlined" color="secondary" onClick={optionNo}>No</Button>
            <Button variant="outlined" color="error" onClick={optionYes}>Yes</Button>
            </div>
        </div>
    }

    </React.Fragment>
    )
}