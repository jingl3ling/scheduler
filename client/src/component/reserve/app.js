import React, {useState} from 'react';
import Form from './form';
import { useDispatch, useSelector } from "react-redux";
import Result from './result';

export default function App(){
    const ev = useSelector((state)=>state.event);
    const [loading, setLoading] = useState(false);
    return(
        <div className='main'>
            <h1>{ev.title}</h1>
            {loading==false? <Form setLoading={setLoading}/>:<Result event={ev}/>}
        </div>
    )
}