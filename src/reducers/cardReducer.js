import {
    GET_CARDS,
    TURN_ALL_CARDS,
    TURN_CARD,
    MATCH_CARD
} from "../actions/cardAction";

const initialState = require("../domain/card");

const shuffleArray=(array)=>{
    for(let i=array.length-1; i>0; i--) {
        let j=Math.floor(Math.random()*(i+1));
        let temp=array[i];
        array[i]=array[j];
        array[j]= temp;
    }

    return array;
};


const cardReducer = (state = {cards: shuffleArray(initialState)}, action) => {
    switch (action.type) {
        case GET_CARDS:
            return state;
        case TURN_CARD:
            const turnedCard = state.cards.map(c => {
                if (c.id === action.cardId) {
                    c.isOpen = c.isOpen === 1 ? 0 : 1;
                }
                return c;
            });
            return Object.assign({}, state, {cards: turnedCard});
        case TURN_ALL_CARDS:
            const turnAllCards = state.cards.map(c => {
                if (c.isMatch !== 1) {
                    c.isOpen = 0;
                }
                return c;
            });

            return Object.assign({}, state, {cards: turnAllCards});
        case MATCH_CARD:
            const matchedCard = state.cards.map(c => {
                if (c.id === action.cardId) {
                    c.isMatch = 1;
                }

                return c;
            });
            return Object.assign({}, state, {cards: matchedCard});
        default:
            return state;
    }
};

export default cardReducer;