import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Result.scss';

class Result extends React.Component {
    resetGame = () => {
        this.props.history.push('/login');
    };

    render() {
        const username = sessionStorage.getItem('username');
        const point = sessionStorage.getItem('point');
        return (
            <div className="result-container">
                <div className="user">{username}</div>

                <div className="score">Score: {point}</div>


                <Button className="reset-button" onClick={() => this.resetGame()}>Reset Game</Button>
            </div>
        )
    }
}

export default (withRouter(Result));