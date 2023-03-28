import React from 'react';
import { TextField, Button} from "@mui/material";

export default function Form({info, setInfo, setMyRes}){
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9000/schedule/reserve/?name=${info.name}&phone=${info.phone}`)
        .then((result)=>result.json())
        .then((data)=>{
            setMyRes(data)
        })
        //setMyRes(reservation.filter(res=>res.name==info.name))
        info.name="";
        info.phone="";
        setInfo({...info})
    }

    const handleChange = (e) => {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if(e.target.name=='phone'&&onlyNums.length<=10){
            info[e.target.name] = onlyNums;
            if(onlyNums.length==10){
                info[e.target.name] = onlyNums.replace(
                    /(\d{3})(\d{3})(\d{4})/,
                    '($1) $2-$3'
                );
            }
        }
        else if(e.target.name!='phone'){
            info[e.target.name] = e.target.value;
        }
        setInfo({...info})
    }

    return(
        <div>

        <h3>Your Information</h3>
        <form onSubmit={handleSubmit} className="flex-box" autocomplete="off">
        <TextField 
            label="First Name" 
            name="name" 
            value={info.name}
            onChange={handleChange}
            required/>
        <TextField 
            label="Phone Number" 
            name="phone"
            value={info.phone}
            onChange={handleChange}
            required/>
        <Button 
            variant="contained" 
            color="secondary"
            type="submit">
            Get
        </Button>
    </form>
    </div>
    )
}