import cardReducer from './cardReducer';
import {ADD_LINK, DELETE_LINK, DOWN_VOTE, UP_VOTE} from "../actions/cardAction";

describe('link reducer', () => {
    it('should return the initial state', () => {
        const initial = JSON.parse(localStorage.getItem("links"));
        expect(cardReducer(undefined, {})).toEqual([
            initial
        ])
    });

    it('should handle add link', () => {
        expect(
            cardReducer({links: []}, {
                type: ADD_LINK,
                link: {
                    name: "link name",
                    url: "link url",
                    id: new Date().getTime(),
                    point: 0
                }
            })
        ).toEqual(
            {
                links: [
                    {
                        name: "link name",
                        url: "link url",
                        id: new Date().getTime(),
                        point: 0
                    }
                ]
            }
        );
    });

    it('should handle delete link', () => {
        expect(
            cardReducer({
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                }]
            }, {
                type: DELETE_LINK,
                linkId: 1
            })
        ).toEqual(
            {
                links: []
            }
        );
    });

    it('should handle up vote link', () => {
        expect(
            cardReducer({
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                }]
            }, {
                type: UP_VOTE,
                linkId: 1
            })
        ).toEqual(
            {
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 1
                }]
            }
        );
    });

    it('should handle down vote link', () => {
        expect(
            cardReducer({
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 2
                }]
            }, {
                type: DOWN_VOTE,
                linkId: 1
            })
        ).toEqual(
            {
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 1
                }]
            }
        );
    });
});