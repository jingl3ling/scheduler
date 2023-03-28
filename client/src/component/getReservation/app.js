import React, {useState} from 'react';
import { TextField, Button, Select, MenuItem } from "@mui/material";
import { useSelector } from 'react-redux';
import Form from './form';
import Result from './result';
import "../../app.scss"

export default function App(){
    const [info, setInfo] = useState({name:"",phone:""})
    const [events, setEvents] = useState([{
        title: 'BIANCA BONDI',
        img:'/img/gallery1.jpeg',
        startDate: '3/7/2023',
        endDate: '3/7/2023',
        description: 
        'site-specific installation including a bed with pillows and sheeting, saline pond, artificial vegetation, natural vegetation, coins, chest of drawers, circular mirror, glass, swan vase, rusted arrows, copper amphores and saltvariable dimensions'
    },
    {
        title: 'BIANCA BONDI2',
        img:'/img/gallery1.jpeg',
        startDate: '3/7/2023',
        endDate: '3/7/2023',
        description: 
        'site-specific installation including a bed with pillows and sheeting, saline pond, artificial vegetation, natural vegetation, coins, chest of drawers, circular mirror, glass, swan vase, rusted arrows, copper amphores and saltvariable dimensions'
    }])
    const [event, setEvent] = useState({title:''}); 
    const [myRes, setMyRes] = useState([]);

    const handleChange=(e)=>{
        setEvent(events.filter((ev)=>ev.title==e.target.value)[0])
        console.log(event);
    }

    return(
        <div className='main'>
            <h2>Get your reservation</h2>
            <div className='flex-box'>
            <p>Select a event to continue </p>
            <Select
                value={event.title}
                name="event"
                label="event"
                onChange={handleChange}
            >
                {events.map((event,i)=>(
                <MenuItem key={i} value={event.title}>{event.title}</MenuItem>
                ))}
            </Select>
            </div>

        {event.title==''? '': <Form info={info} setInfo={setInfo} setMyRes={setMyRes}/>}
        {myRes.length==0? '': <Result event={event} myRes={myRes}/>}
        </div>
    )
}