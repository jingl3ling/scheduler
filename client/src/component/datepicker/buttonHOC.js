import React from 'react';
import {Button} from '@mui/material';
import { Link } from "react-router-dom";

export default function App(ChildComponent,props){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                avail: 0
            }
            console.log(this.state.avail);
        }

        componentDidUpdate(prevProps, prevState){
            if(prevProps.test!=this.props.test){
                this.setState({avail:this.props.test});
                console.log('test changed');
            }
        }

        render(){
            console.log('props:',props);
            return(
                <React.Fragment>
                    <div className='flex-box'>
                    <ChildComponent/>
                    {this.state.avail>0?
                    <Button variant="contained">
                        <Link to="/reserve">Continue</Link> 
                    </Button> : <div></div>}
                    </div>
                </React.Fragment>
            )
        }
    }
}