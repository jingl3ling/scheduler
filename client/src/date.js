import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getSchedule } from './redux/actions/scheduleActions';
import Remain from './remainingSlots';

export default function App(){
    const [value, setValue] = useState(dayjs(new Date().toLocaleString()));
    // const [date, setDate] = useState(dayjs(new Date().toLocaleDateString));
    var schedule = useSelector((state)=>state.schedule);
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
    };

    const disableWeekends = (date) => {
        const d = new Date(date)
        return d.getDay()===6 || d.getDay()===0
    }

    return(
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            shouldDisableDate={disableWeekends}
            disablePast={true}
        /></LocalizationProvider>
        <Remain time={value}/>
        </div>
    )
}