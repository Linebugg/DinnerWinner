import React from 'react';

import axios from 'axios';
import Button from '@material-ui/core/Button'; //https://material-ui.com/
import './dinnerWinner.css'
import { CircularProgress } from '@material-ui/core';
import SimpleCard from './card.js'



class DinnerWinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foodName: "",
            foodInstruction:"", 
            drinkName: "", 
            drinkInstruction:"", 

        }
    }

    componentDidMount() {
        this.makeRequest();
    }



    render() {
        return (
            <div className="container">
              
                <div className="comic-container">


                </div>
            
            <div>
    <SimpleCard > </SimpleCard>   
        <SimpleCard></SimpleCard>
</div>

            </div>
            
        )
    }
}

export default DinnerWinner;