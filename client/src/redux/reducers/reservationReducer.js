import { ActionTypes } from "../constants/action-types";

const initialState = {
    date:'',
    time:'',
    name:'',
    phone:'',
    quantity:1,
    avail:0,
    reservation:[]
}

export const reservationReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case(ActionTypes.ADD_TIME):{
            state.date=payload.date;
            state.time=payload.time;
            return {...state};
        }
        case(ActionTypes.ADD_INFO):{
            state.name=payload.name;
            state.phone=payload.phone;
            if(payload.quantity) state.quantity=payload.quantity;
            return {...state};
        }
        case(ActionTypes.RESERVE):{
            const curr={
                date:state.date,
                time:state.time,
                name:state.name,
                number:state.number,
                quantity:state.quantity,
            }
            state.reservation=[...state.reservation, curr];
            return {...state};
        }
        case(ActionTypes.STORE_AVAIL):{
            state.avail = payload;
            return {...state}
        }
        default:
            return state;
    }
}
