import React, {useState, useEffect} from "react";
import { TextField, Button, Modal, Box, Select, MenuItem} from "@mui/material";
import "../../app.scss"
import Calendar from '../datepicker/calendar';
import Dialogue from './dialogue';
import Cancel from './cancel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    width: '60vw',
    height: '60vh',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export default function Result({event, myRes}){
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = useState({});
    const [cancel, setCancel] = useState([]);

    useEffect(()=>{
        const arr= Array(myRes.length);
        arr.fill(false);
        setCancel(arr);
    },[])

    console.log(myRes)

    const handleOpen = ({Date, Time, Quantity}) => {
      setOpen(true);
      setSelected({ Date, Time, Quantity});
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style}}>
                <Button 
                color="secondary"
                onClick={handleClose} 
                style={{position:"absolute", right: 0}}
                >X</Button>
                <h2>Current Reservation</h2>
                <p>Date Time</p>
                <p>Quantity:</p>
                <h3>Modify your visit</h3>
                {/* <Calendar/> */}
                Quantity:<Select
                name="quantity"
                label="Quantity"
                onChange={handleChange}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
                <br/>
                <Button variant="contained" color="secondary">Confirm Changes</Button>
                <Button variant="outlined" color="error">Cancel Reservation</Button>
                </Box>
            </Modal>
            <div className="flex-box-vert">
            {myRes?.map(({Date, Time, Quantity, res_id, id},i)=>(
                <div className='card' key={i}>
                <img src={event.img}/>
                {cancel[i]==true? <Cancel event={event} Date={Date} Time={Time} Quantity={Quantity} 
                setCancel={setCancel} i={i} res_id={res_id} dt_id={id}
                />:<div className='card-body'>
                    <h3>{event.title}</h3>
                    <p>{Date} {Time}</p>
                    <p>Quantity: {Quantity}</p>
                    <div className="flex-box">
                    <Button variant="outlined" color="secondary" onClick={()=>handleOpen({Date, Time, Quantity})}>Modify</Button>
                    <Button variant="outlined" color="error" onClick={()=>cancelCard(i)}>Cancel</Button>
                    </div>
                </div>}
                </div>

            ))}
            </div>
        </React.Fragment>
    )
}