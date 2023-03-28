import React, {useState, useEffect} from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addInfo, reserve } from "../../redux/actions/reserveActions";
import { useForm, Controller } from 'react-hook-form';

export default function App({setLoading}){
    var res = useSelector((state)=>state.reserve);
    var avail = res.avail;
    const dispatch = useDispatch();
    const [info, setInfo] = useState({
        name:'',
        phone: '',
        quantity: 1
    });
    const [quan_arr, setQuan_arr] = useState([]);
    // const { control, register, handleSubmit, formState:{errors} } = useForm();

    useEffect(()=>{
        for(let i=1; i<=avail; i++){
            quan_arr.push(i);
            setQuan_arr([...quan_arr]);
        }
    },[])

    const handleChange = (e) =>{
        if(e.target.name=='phone'){
            var onlyNums = e.target.value.replace(/[^0-9]/g, '');
        }
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
        setInfo({...info});
        dispatch(addInfo(info)); //add Info to redux
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        dispatch(reserve());
        const result = await fetch(`http://localhost:9000/schedule/reserve/?date=${res.date}&time=${res.time}`,
        {method:"PUT", headers:{"Content-Type":"application/json"},body:JSON.stringify(info)});
        console.log('PUT result', result)
        info.name='';
        info.phone='';
        info.quantity=1;
        setInfo({...info}); //setCurrent info
        setLoading(true);
    }

    return(
        <div>
        <p>Reservation on: {res.date} {res.time}</p>
        <h3>Your Information</h3>
        <form onSubmit={onSubmit} className="flex-box" autocomplete="off">
            <TextField
                name="name"
                label="First Name" 
                value={info.name}
                onChange={handleChange}
                required
            />
            <TextField 
                label="Phone Number" 
                name="phone"
                value={info.phone}
                onChange={handleChange}
                required/>
            <Select
                value={info.quantity}
                name="quantity"
                label="Quantity"
                onChange={handleChange}
            >
                {quan_arr.map((quan,i)=>(
                <MenuItem key={i} value={quan}>{quan}</MenuItem>
                ))}
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