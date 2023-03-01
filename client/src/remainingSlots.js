import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App(props){
    const schedule = useSelector((state)=>state.schedule.schedule);
    const time = props.time.$d;
    const date = time.toLocaleDateString();
    const [slots_arr, setSlots_arr] = useState({"8am":{"remaining":0},"9am":{"remaining":0}});
    const [slots, setSlots] = useState(0);

    useEffect(()=>{
        setSlots(0);
        // console.log('schedule',schedule)
        // console.log('date',date)
        // console.log(schedule[date]);

        for(let i=8; i<10; i++){
            setSlots((prevState)=>prevState+schedule[date][`${i}am`].remaining)
        }
    }, [schedule,date])

    return(
        <div>
            On {date}, there are {slots} slots left;
        </div>
    )
}