import React from 'react';
import {Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Card from './Card';

class GameBoard extends React.Component {
    interval = 0;
    point = 0;
    time = 0;
    // set 5 minutes default time
    totalTime = 300;

    componentDidMount() {
        const username= sessionStorage.getItem('username');
        if(!username) {
            this.props.history.push('/login');
        }

        this.time = 0;
        this.interval = setInterval(() => {
            this.time += 1;

            if (this.time === this.totalTime) {
                this.props.history.push('/result');
            }
        }, 1000);
    }

    componentDidUpdate() {
        let isMatchCount = 0;
        this.props.cards.map(c => {
            if (c.isMatch === 1)
                isMatchCount++

        });

        if (this.props.cards.length === isMatchCount) {
            this.props.history.push('/result')
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.props.cards.map(c => {
            c.isMatch === 1 ? this.point += 10 : this.point += 0;
        });

        this.point += (this.totalTime - this.time);
        sessionStorage.setItem('point', JSON.stringify(this.point));
        console.log(this.point);
    }

    render() {
        const cards = this.props.cards;
        const cardList = cards && cards.length > 0 ? (
            cards.map(c => {
                return (
                    <Card key={c.id} card={c} isOpen={c.isOpen} isMatch={c.isMatch}/>
                )
            })
        ) : (
            <div>No data</div>
        );
        return (
            <div className="game-container">
                <Row>
                    {cardList}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cardR.cards
    }
};

export default connect(mapStateToProps)(withRouter(GameBoard));