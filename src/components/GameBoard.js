import React from 'react';
import {Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import Card from './Card';

class GameBoard extends React.Component {
    render() {
        const cards = this.props.cards;
        console.log('cars', cards);
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

export default connect(mapStateToProps)(GameBoard);