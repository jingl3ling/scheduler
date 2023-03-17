import { ActionTypes } from "../constants/action-types";

const initialState = {
    img:'',
    title:'',
    description:''
}

export const eventReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case(ActionTypes.SET_EVENT):
            state.img=payload.img;
            state.title=payload.title;
            state.description=payload.description;
            return {...state};
        default: 
            return state
    }
}