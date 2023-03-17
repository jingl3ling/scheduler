import React, {useState} from "react";
import { TextField, Button, Select, MenuItem, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addInfo, reserve } from "../../redux/actions/reserveActions";
import { useForm, Controller } from 'react-hook-form';

export default function App(){
    var res = useSelector((state)=>state.reserve);
    const dispatch = useDispatch();
    const [info, setInfo] = useState({
        name:'',
        number: '',
        quantity: 1
    });
    // const { control, register, handleSubmit, formState:{errors} } = useForm();

    const handleChange = (e) =>{
        console.log('value',e.target.value);
        console.log('name',e.target.name);
        if(e.target.name=='number'){
            var onlyNums = e.target.value.replace(/[^0-9]/g, '');
        }
        if(e.target.name=='number'&&onlyNums.length<=10){
            info[e.target.name] = onlyNums;
            if(onlyNums.length==10){
                info[e.target.name] = onlyNums.replace(
                    /(\d{3})(\d{3})(\d{4})/,
                    '($1) $2-$3'
                );
            }
        }
        else if(e.target.name!='number'){
            info[e.target.name] = e.target.value;
        }
        setInfo({...info});
        dispatch(addInfo(info)); //add Info to redux
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(reserve());
        console.log('res:',res);
        console.log(info);
        info.name='';
        info.number='';
        info.quantity=1;
        setInfo({...info}); //setCurrent info
    }

    return(
        <div>
        <p>Reservation on: {res.date} {res.time}</p>
        <h2>Your Information</h2>
        <form onSubmit={onSubmit}>
            <TextField
                name="name"
                label="First Name" 
                value={info.name}
                onChange={handleChange}
                required
            />
            <TextField 
                label="Phone Number" 
                name="number"
                value={info.number}
                onChange={handleChange}
                required/>
            <Select
                value={info.quantity}
                name="quantity"
                label="Quantity"
                onChange={handleChange}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
            <Button 
                variant="contained" 
                color="secondary"
                type="submit">
                Reserve
            </Button>
        </form>
        </div>
    )
}