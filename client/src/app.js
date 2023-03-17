import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/navBar/app'
import CurrEvent from './component/currEvent/app'
import Date from './component/datepicker/app';
import Carrousel from './component/carousel/app';
import Reserve from './component/reserve/app'
import GetReservation from './component/getReservation/app'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#1d1717',
        },
        secondary: {
          main: '#77676f',
        },
      },
  });

export default function App(){
    return(
        <BrowserRouter>
        <ThemeProvider theme={theme}>
        <NavBar/>
            <Routes>
            <Route exact path='/' element={<CurrEvent/>}/>
            <Route exact path='/date' element={<Date/>}/>
            <Route exact path='/reserve' element={<Reserve/>} />
            <Route exact path='/getReserve' element={<GetReservation/>} />
        </Routes>
        </ThemeProvider>
        </BrowserRouter>
    )
}