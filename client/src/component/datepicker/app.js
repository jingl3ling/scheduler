import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getSchedule } from '../../redux/actions/scheduleActions';
import Remain from '../../remainingSlots';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { addTime } from '../../redux/actions/reserveActions';

export default function App(){
    const date = new Date("3/7/2023");
    const [value, setValue] = useState(dayjs(date.toLocaleString()));
    const [dayTime, setDayHour] = useState({date:"3/7/2023",time:"12am"})
    const dispatch = useDispatch();

    useEffect(()=>{
        (async()=>{
        const res = await axios.get("http://localhost:3000/exhibition1.json")
        const data = await res.data;
        dispatch(getSchedule(data));
        })();
    },[])

    const handleChange = (newValue) => {
        setValue(newValue);
        const time = newValue.$d;
        const date = time.toLocaleDateString();
        var hour = time.getHours() < 12 ? time.getHours()+'am':time.getHours()-12+'pm';
        if(time.getHours()==12) hour = time.getHours()+'pm';
        dayTime.date=date;
        dayTime.time=hour;
        setDayHour({...dayTime})
        dispatch(addTime(dayTime))
    };

    const disableWeekends = (date) => {
        const d = new Date(date)
        return d.getDay()===6 || d.getDay()===0
    }

    return(
        <div>
        <h2>Book your Visit</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            shouldDisableDate={disableWeekends}
            // disablePast={true}
            />
            <TimePicker 
            label="Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            minTime={dayjs().set('hour', 7)}
            maxTime={dayjs().set('hour', 16)}
            views={['hours']}/>
        </LocalizationProvider>
        <Remain time={value}/>
        </div>
    )
}