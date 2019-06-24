export const GET_CARDS = "GET_CARDS";
export const TURN_CARD = "TURN_CARD";
export const TURN_ALL_CARDS = "TURN_ALL_CARDS";
export const MATCH_CARD = "MATCH_CARD";

export const getCards = () => {
    return {
        type: GET_CARDS
    }
};

export const turnCard = (cardId) => {
    return {
        type: TURN_CARD,
        cardId
    }
};

export const turnAllCards = () => {
    return {
        type: TURN_ALL_CARDS,
    }
};

export const matchCard = (cardId) => {
    return {
        type: MATCH_CARD,
        cardId
    }
};


