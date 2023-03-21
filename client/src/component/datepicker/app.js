import React from 'react';
import Calendar from './calendar';
import { useDispatch, useSelector } from "react-redux";

export default function App(){
    const ev = useSelector((state)=>state.event);
    return(
        <div>
            <img src={ev.img}/>
            <div className='main'>
                <h1>{ev.title}</h1>
                <h2>Select a date and time for your visit</h2>
                <Calendar/>
            </div>
        </div>
    )
}