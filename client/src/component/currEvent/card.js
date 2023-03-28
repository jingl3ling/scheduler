import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetEvent } from '../../redux/actions/eventActions';

export default function App({event}){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick=()=>{
        dispatch(SetEvent(event));
        navigate('/date')
    }

    return(
        <div className='card' onClick={handleClick}>
            <img src={event.img}/>
            <div className='card-body'>
                <h3>{event.title}</h3>
                <h4>{event.startDate}-{event.endDate}</h4>
                <p>{event.description}</p>
            </div>
        </div>
    )
}