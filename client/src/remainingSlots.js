import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App(props){
    const schedule = useSelector((state)=>state.schedule.schedule);
    const time = props.time.$d;
    const date = time.toLocaleDateString();
    var hour = time.getHours() < 12 ? time.getHours()+'am':time.getHours()-12+'pm';
    if(time.getHours()==12) hour = time.getHours()+'pm';
    const [slots, setSlots] = useState(0);

    useEffect(()=>{
        setSlots(0);
        console.log('schedule',schedule)
        console.log('hour',hour)
        // console.log('date',date)
        // console.log(schedule[date]);
        if(time.getHours()>7&&time.getHours()<17){
            setSlots(schedule[date][hour].remaining)
        }
    }, [date,hour])

    return(
        <div>
            On {date} {hour}, there are {slots} slots left;
        </div>
    )
}