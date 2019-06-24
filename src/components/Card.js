import React from 'react';
import {connect} from 'react-redux';
import {turnCard, turnAllCards, matchCard} from '../actions/cardAction';
import {Col} from 'react-bootstrap';
import './Card.scss';

class Card extends React.Component {
    openCard = (c) => {
        if(c.isMatch===1 || c.isOpen===1) {
            return;
        }

        const opened = this.checkOpenOrMatchCard('open');
        if (opened.length < 2) {
            this.props.turnCard(c.id);

            const openedCard = this.checkOpenOrMatchCard('open');
            if (openedCard.length === 2) {
                if (openedCard[0].name === openedCard[1].name) {
                    this.props.matchCard(openedCard[0].id);
                    this.props.matchCard(openedCard[1].id);
                }
            }
        } else {
            this.props.turnAllCards();
            this.props.turnCard(c.id);
        }
    };

    checkOpenOrMatchCard = (type) => {
        const allCards = this.props.cards;
        let filteredCards;
        if (type === 'open') {
            filteredCards = allCards.filter(c => c.isOpen === 1 && c.isMatch !== 1);
        } else {
            filteredCards = allCards.filter(c => c.isMatch === 1);
        }

        return filteredCards;
    };


    render() {
        const card = this.props ? this.props.card : undefined;
        // console.log(card);
        return(
            <Col xs={3} className={`flip-card ${card.isOpen===1? 'open': 'close'} ${card.isMatch===1? 'matched': ''}`}
            onClick={() => this.openCard(card)}>
                <div className="flip-card-inner">
                    <div className="flip-card-back">
                        <img src={`../icons/${card.name}.png`}/>
                    </div>
                    <div className="flip-card-front">?</div>
                </div>
            </Col>
        )
        // return (
        //     <Col xs={3} className="card-container" onClick={() => this.openCard(card)}>
        //         <div className={`card ${card.isOpen ? 'open' : ''} ${card.isMatch ? 'match' : ''}`}>
        //             {card.isOpen ? (
        //                 <div className="front">{card.name}</div>
        //             ) : (
        //                 <div>?</div>
        //             )}
        //         </div>
        //     </Col>
        // )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cardR.cards
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        turnCard: (cardId) => dispatch(turnCard(cardId)),
        matchCard: (cardId) => dispatch(matchCard(cardId)),
        turnAllCards: () => dispatch(turnAllCards()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);