import { ActionTypes } from "../constants/action-types";

const initialState = {
    date:'',
    time:'',
    name:'',
    number:'',
    quantity:1
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
            state.number=payload.number;
            state.quantity=payload.quantity;
            return {...state};
        }
        default:
            return state;
    }
}
