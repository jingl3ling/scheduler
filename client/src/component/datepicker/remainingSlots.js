import React from "react";
import { Alert } from '@mui/material';

export default function App({dayTime, avail}){
    return(
        <div>
        {avail>0?
         <Alert>On {dayTime.date} {dayTime.time}, there are {avail} slots left;</Alert>
        :
        <Alert severity="error">This Date and Time is not available</Alert>}
        <br/>
        </div> 
    )
}