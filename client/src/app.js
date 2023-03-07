import React from 'react';
import Date from './component/datepicker/app';
import Carrousel from './component/carousel/app';
import ReserveForm from './component/reserveForm/app'

export default function App(){
    return(
        <div>
            <Carrousel/>
            <h1>Scheduler</h1>
            <Date/>
            <ReserveForm/>
        </div>
    )
}