import React, {useState} from 'react';
import Card from './card';

export default function App(){
    const [events, setEvents] = useState([{
        title: 'BIANCA BONDI',
        img:'/img/gallery1.jpeg',
        startDate: '3/7/2023',
        endDate: '3/7/2023',
        description: 
        'site-specific installation including a bed with pillows and sheeting, saline pond, artificial vegetation, natural vegetation, coins, chest of drawers, circular mirror, glass, swan vase, rusted arrows, copper amphores and saltvariable dimensions'
    }])
    return(
        <div className='main'>
            <h1>Current Events</h1>
            {events.map((event)=>(
                <Card key={event.title} event={event}/>
            ))}
        </div>
    )
}