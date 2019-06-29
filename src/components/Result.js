import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Result.scss';

class Result extends React.Component {
    state = {
        point: 0,
        username: ''
    };

    resetGame = () => {
        this.props.history.push('/login');
        sessionStorage.clear();
    };

    componentDidMount() {
        this.setState({
            username: sessionStorage.getItem('username'),
            point: sessionStorage.getItem('point')
        });
    }

    render() {
        return (
            <div className="result-container">
                <div className="user">{this.state.username}</div>

                <div className="score">Score: {this.state.point}</div>


                <Button className="reset-button" onClick={() => this.resetGame()}>Reset Game</Button>
            </div>
        )
    }
}

export default (withRouter(Result));