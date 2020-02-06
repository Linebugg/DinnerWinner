import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



class SimpleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }


    toggle = () => {
        this.setState({
            pressed: true
        });

    }

    render() {
        
        return (
            
            <div className="simpleCard">
                <Card className={"N"} >
                    <h1>{this.props.APIdata.foodName} </h1>
                    <img src={this.props.APIdata.foodImg} ></img>
                </Card>
                <Card className={"N"} >
                    <h1>{this.props.APIdata2.drinkName} </h1>
                    <img src={this.props.APIdata2.drinkImg} ></img>
                </Card>
                <Card className="gameJeopardy" >
                    <h1> Jeopardy </h1>
                    <h3>Question : {this.props.APIdata3.question} </h3>
                    <Button className="button1" onClick={() => this.toggle()}>
                        show answer </Button>
                    <div> {this.state.pressed ? this.props.APIdata3.answers : ""}</div>

                </Card>
            </div>
        );
    }
}
export default SimpleCard; 