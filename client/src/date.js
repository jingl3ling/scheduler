import React, {useState} from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function App(){
    const [value, setValue] = React.useState(dayjs(new Date().toLocaleString()));

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    const disableDates = (date) => {
        const d = new Date(date)
        return d.getDay()===2 
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
          shouldDisableDate={disableDates}
          disablePast={true}
        /></LocalizationProvider>
        </div>
    )
}