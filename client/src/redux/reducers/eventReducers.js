import { ActionTypes } from "../constants/action-types";

const initialState = {
    title:'',
    img:'',
    startDate:'',
    endDate:'',
    description:''
}

export const eventReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case(ActionTypes.SET_EVENT):
            state.img=payload.img;
            state.title=payload.title;
            state.startDate=payload.startDate;
            state.endDate=payload.endDate;
            state.description=payload.description;
            return {...state};
        default: 
            return state
    }
}