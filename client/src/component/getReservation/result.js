import React, {useState, useEffect} from "react";
import { TextField, Button, Modal, Box, Select, MenuItem} from "@mui/material";
import "../../app.scss"
import ReservationContext from "./reservationContent";
import Modify from './modify';
import Cancel from './cancel';

export default function Result({event, myRes}){
    const [open, setOpen] = useState(false);
    const [curr, setCurr] = useState({});
    const [cancel, setCancel] = useState([]);

    useEffect(()=>{
        const arr= Array(myRes.length);
        arr.fill(false);
        setCancel(arr);
    },[])

    const handleOpen = ({Date, Time, Quantity}) => {
      setOpen(true);
      setCurr({ Date, Time, Quantity});
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange=()=>{
        
    }

    const cancelCard=(i)=>{
        cancel[i]=true;
        setCancel([...cancel]);
    }
    
    return(
        <React.Fragment>
            <ReservationContext.Provider value={{open:{open},handleClose:{handleClose},
            handleChange:{handleChange}}} >
            <div className="flex-box-vert">
            {myRes?.map(({Date, Time, Quantity, res_id, id},i)=>(
                <div className='card' key={i}>
                <img src={event.img}/>
                {cancel[i]==true? <Cancel event={event} Date={Date} Time={Time} Quantity={Quantity} 
                setCancel={setCancel} i={i} res_id={res_id} dt_id={id}
                />:<div><div className='card-body'>
                    <h3>{event.title}</h3>
                    <p>{Date} {Time}</p>
                    <p>Quantity: {Quantity}</p>
                    <div className="flex-box">
                    <Button variant="outlined" color="secondary" onClick={()=>handleOpen({Date, Time, Quantity})}>Modify</Button>
                    <Button variant="outlined" color="error" onClick={()=>cancelCard(i)}>Cancel</Button>
                    </div>
                </div><Modify curr={curr} res_id={res_id} dt_id={id}/></div>}
                </div>

            ))}
            </div>
            </ReservationContext.Provider>
        </React.Fragment>
    )
}