import React, {useState} from 'react';
import { TextField, Button} from "@mui/material";
import { useSelector } from 'react-redux';
import "../../app.scss"

export default function App(){
    const [info, setInfo] = useState({name:"",number:""})
    const [myRes, setMyRes] = useState([]);

    const reservation = useSelector((state)=>state.reserve.reservation);

    console.log('resevations',reservation)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMyRes(reservation.filter(res=>res.name==info.name))
        info.name="";
        info.number="";
        setInfo({...info})
    }

    const handleChange = (e) => {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if(e.target.name=='number'&&onlyNums.length<=10){
            info[e.target.name] = onlyNums;
            if(onlyNums.length==10){
                info[e.target.name] = onlyNums.replace(
                    /(\d{3})(\d{3})(\d{4})/,
                    '($1) $2-$3'
                );
            }
        }
        else if(e.target.name!='number'){
            info[e.target.name] = e.target.value;
        }
        setInfo({...info})
    }

    return(
        <div>
            <h2>Get your reservation</h2>
            <form onSubmit={handleSubmit}>
            <TextField 
                label="First Name" 
                name="name" 
                value={info.name}
                onChange={handleChange}
                required/>
            <TextField 
                label="Phone Number" 
                name="number"
                value={info.number}
                onChange={handleChange}
                required/>
            <Button 
                variant="contained" 
                color="secondary"
                type="submit">
                Get
            </Button>
        </form>
        <table>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Name</th>
                <th>Number</th>
                <th>Quantity</th>
            </tr>
            {myRes?.map(({date, time, name, number, quantity})=>(
                <tr>
                    <td>{date}</td> 
                    <td>{time}</td>
                    <td>{name}</td> 
                    <td>{number}</td>
                    <td>{quantity}</td>
                </tr>
            ))}
        </table>
        </div>
    )
}