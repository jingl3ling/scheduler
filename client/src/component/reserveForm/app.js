import React, {useState} from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../../redux/actions/reserveActions";

export default function App(){
    var res = useSelector((state)=>state.reserve);
    const dispatch = useDispatch();
    const [info, setInfo] = useState({
        name:'',
        number: '',
        quantity: 1
    });

    const handleChange = (e) =>{
        console.log(e.target.value);
        info[e.target.name] = e.target.value;
        setInfo({...info});
        dispatch(addInfo(info)); //add Info to redux
        console.log('res:',res);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info);
        info.name='';
        info.number='';
        info.quantity=1;
        setInfo({...info}); //setCurrent info
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextField 
                label="First Name" 
                name="name" 
                value={info.name}
                onChange={handleChange}/>
            <TextField 
                label="Phone Number" 
                name="number"
                value={info.number}
                onChange={handleChange}/>
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
    )
}