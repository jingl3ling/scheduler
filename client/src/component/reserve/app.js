import React from 'react';
import Form from './form';
import { useDispatch, useSelector } from "react-redux";

export default function App(){
    const ev = useSelector((state)=>state.event);
    return(
        <div className='main'>
            <h1>{ev.title}</h1>
            <Form/>
        </div>
    )
}