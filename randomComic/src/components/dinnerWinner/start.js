import React from 'react';

import axios from 'axios';
import Button from '@material-ui/core/Button'; //https://material-ui.com/
import './dinnerWinner.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { CircularProgress } from '@material-ui/core';
import DinnerWinner from './dinnerWinner';
import SimpleCard from './card';

class Start extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            food: { foodName: "", foodInstruction:"",  foodImg:""}, 
           drink: { drinkName: "", 
            drinkInstruction:"", 
            drinkImg:""}, 
            jeopardy : {question: "", answer:""}
        }
     this.makeDrinkRequest(); 
     this.makeFoodRequest(); 
     this.makeJeopardyRequest(); 
    }

    makeJeopardyRequest = async () => {
        this.setState({loading: true})
        const url = 'http://jservice.io/api/random' ;
       
        axios.get(url).then(res => {
            console.log("RES", res)
            this.setState({ 
                jeopardy: {question: res.data[0].question, 
                    answers: res.data[0].answer}
        
            });
        });
    }
    

    makeFoodRequest = async () => {
        this.setState({loading: true})
        const url = 'https://www.themealdb.com/api/json/v1/1/random.php' ;
        
        axios.get(url).then(res => {
            console.log("RES", res)
            this.setState({ 
                food: {foodName: res.data.meals[0].strMeal, foodInstruction:res.data.meals[0].strInstructions
                     , foodImg: res.data.meals[0].strMealThumb}
         
            });
        });

    }
    makeDrinkRequest = async () => {
        this.setState({loading: true})
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        
        axios.get(url).then(res => {
            this.setState({ 
            drink :{drinkName: res.data.drinks[0].strDrink, 
                drinkInstruction: res.data.drinks[0].strInstructions, 
                drinkImg:res.data.drinks[0].strDrinkThumb} 
       
            });
        });

    }

    getRandomComic = () => {
        this.makeFoodRequest();
        this.makeDrinkRequest();
        this.makeJeopardyRequest(); 
        
       
        
    }

    render() {
       
        return (
            
            <div className="container">
                <Button className="button" variant="contained" color="primary" onClick={this.getRandomComic}>Generate Dinner party </Button>
   <SimpleCard APIdata= {this.state.food} APIdata2 ={this.state.drink} APIdata3 ={this.state.jeopardy} ></SimpleCard>
  
  
            </div>
        )
    }
}

export default Start;