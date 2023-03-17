import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { useDispatch, useSelector } from "react-redux";
import Remain from '../../remainingSlots';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {Button} from '@mui/material';
import { addTime } from '../../redux/actions/reserveActions';
import { useNavigate } from 'react-router-dom';

export default function App(){
    const date = new Date("3/7/2023");
    const [value, setValue] = useState(dayjs(date.toLocaleString()));
    const [dayTime, setDayHour] = useState({date:"3/7/2023",time:"12am"})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        (async()=>{
        // const res = await axios.get("http://localhost:9000/test")
        const res = await fetch("/test")
        // const data = await res.data;
        console.log('data:',res);
        // dispatch(getSchedule(data));
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                shouldDisableDate={disableWeekends}
                // disablePast={true}
                /> */}
                <Remain time={value}/>
                <div className='flex-box'>
                <CalendarPicker
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}/>
                    <div>
                <TimePicker 
                label="Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                minTime={dayjs().set('hour', 7)}
                maxTime={dayjs().set('hour', 16)}
                views={['hours']}/>
                <Button variant="contained" onClick={(e)=>navigate('/reserve')}>Continue</Button>
                </div>
                </div>
            </LocalizationProvider>
        </div>
    )
}