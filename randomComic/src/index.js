import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game/game';
import Comic from './components/comic/comic';
import DinnerWinner from './components/dinnerWinner/dinnerWinner';
import Start from './components/dinnerWinner/start';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
    <Start/>,
    document.getElementById('root')
  
)
