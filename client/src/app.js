import React from 'react';
import Date from './component/datepicker/app';
import Carrousel from './component/carousel/app';
import ReserveForm from './component/reserveForm/app'
import GetReservation from './component/getReservation/app'

export default function App(){
    return(
        <div class="center" >
            <Carrousel/>
            <Date/>
            <ReserveForm/>
            <GetReservation/>
        </div>
    )
}