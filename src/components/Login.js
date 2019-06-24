import React from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
    state = {
        username: '',
        showAlert: false,
        point: 0
    };

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    startGame = (e) => {
        e.preventDefault();
        if (!this.state.username) {
            this.setState({
                showAlert: true
            });

            setTimeout(() => {
                this.setState({
                    showAlert: false
                })
            }, 2000)
        } else {
            sessionStorage.setItem('username', this.state.username);
            this.props.history.push('/game');
        }

    };

    render() {
        return (
            <div className="login-container">
                {
                    this.state.showAlert === true ? (
                        <Alert variant="danger" className="alert-container">
                            Enter USERNAME!!
                        </Alert>
                    ) : (
                        <div></div>
                    )
                }

                <div className="form-container">
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Control size="lg" type="text" className="username" placeholder="Enter username"
                                          onChange={(e) => this.onChangeHandler(e)}/>
                        </Form.Group>
                    </Form>
                    <div className="button-container">
                        <Button className="start-button" onClick={(e) => this.startGame(e)}>Start Game</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default (withRouter(Login));