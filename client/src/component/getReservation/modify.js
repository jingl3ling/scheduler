import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Modal, Box, Select, MenuItem} from "@mui/material";
import ReservationContext from "./reservationContent";
import {CalendarChild} from '../datepicker/calendar';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    width: '60vw',
    height: '80vh',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
  };

export default function Modify({curr, dt_id, res_id}){
    const context = useContext(ReservationContext);
    const [quan_arr, setQuan_arr] = useState([]);
    const [success, setSuccess] = useState(false);
    var res = useSelector((state)=>state.reserve);
    const navigate = useNavigate();
    const [req, setReq] = useState({
        dt_id: dt_id,
        res_id: res_id,
        date: res.date,
        time: res.time,
        name: res.name,
        phone: res.phone,
        quantity: curr.Quantity,
        type: 'update',
    });

    var avail = res.avail;
    console.log(avail);

    useEffect(()=>{
        setReq({...req, date:res.date, time:res.time})
    },[res.date, res.time]);

    useEffect(()=>{
        setQuan_arr([]);
        for(let i=1; i<=avail; i++){
            quan_arr.push(i);
            setQuan_arr([...quan_arr]);
        }
    },[avail]);

    const handleChange = (e) =>{
        setReq({...req, [e.target.name]:e.target.value})
    }

    const confirm = async() =>{
        console.log(req);
        const result = await fetch(`http://localhost:9000/schedule/modify`,
        {method:"PUT", headers:{"Content-Type":"application/json"},body:JSON.stringify(req)});
        console.log(result);
        if(result.status==200){
            setSuccess(true);
        }
    }

    return(
        <React.Fragment>
        <Modal
        open={context.open.open}
        onClose={context.handleClose.handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description">
        <Box sx={{ ...style}} className="box">
        <Button 
        color="secondary"
        onClick={context.handleClose.handleClose} 
        style={{position:"absolute", right: 0}}
        >X</Button>
        {success==false? 
        <div>
        <h2>Modify Your Reservation</h2>
        <p>{curr.Date} {curr.Time}</p>
        <p>Quantity: {curr.Quantity}</p>
        <h3>Modify your visit</h3>
        <CalendarChild setReq={setReq} req={req}/>
        Quantity:<Select
        name="quantity"
        label="Quantity"
        onChange={handleChange}
        >
            {quan_arr.map((quan,i)=>(
            <MenuItem key={i} value={quan}>{quan}</MenuItem>
            ))}
    </Select>
        <br/>
        <Button variant="contained" color="secondary" onClick={confirm}>Confirm Changes</Button>
        <Button variant="outlined" color="error">Cancel Reservation</Button>
        </div>
    : 
    <div>Your changes has been made
        <Button variant="contained" color="secondary" onClick={(e)=>navigate('/')}>OK</Button>
    </div>}
    </Box>
    </Modal>
    </React.Fragment>
    )
}