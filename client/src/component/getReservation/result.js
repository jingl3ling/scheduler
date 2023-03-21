import React, {useState} from "react";
import { TextField, Button, Modal, Box, Select, MenuItem} from "@mui/material";
import "../../app.scss"
import Date from '../datepicker/app';
import Dialogue from './dialogue';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export default function Result({myRes}){
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = useState({});

    const handleOpen = ({date, time, name, number, quantity}) => {
      setOpen(true);
      setSelected({ date ,time, name, number, quantity});
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange=()=>{
        
    }
    
    return(
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: '60vw' }}>
                <Button 
                color="secondary"
                onClick={handleClose} 
                style={{position:"absolute", right: 0}}
                >X</Button>
                <h2>Current Reservation</h2>
                <div>Date: {selected?.date}</div>
                <div>Time: {selected?.time}</div>
                <div>Name: {selected?.name}</div>
                <div>Number: {selected?.number}</div>
                <div>Quantity: {selected?.quantity}</div><br/>
                <h2 id="child-modal-title">Modify your visit</h2>
                <Date/>
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
            <table>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Name</th>
                <th>Number</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
            {myRes?.map(({date, time, name, number, quantity})=>(
                <tr>
                    <td>{date}</td> 
                    <td>{time}</td>
                    <td>{name}</td> 
                    <td>{number}</td>
                    <td>{quantity}</td>
                    <td style={{width:'100px'}}>
                        <Button variant="outlined" color="secondary" onClick={()=>handleOpen({date, time, name,number,quantity})}>Modify</Button>
                        <Button variant="outlined" color="error">Cancel</Button>
                    </td>
                </tr>
            ))}
        </table>
        </React.Fragment>
    )
}