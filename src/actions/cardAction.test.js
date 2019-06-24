import {
    GET_LINKS,
    ADD_LINK,
    DELETE_LINK,
    UP_VOTE,
    DOWN_VOTE,
    deleteLink,
    addLink,
    upVote,
    getLinks,
    downVote
} from './cardAction'

describe('link actions', () => {
    it('should get links with count and offset', () => {
        const currentPage = 1;
        const expectedAction = {
            type: GET_LINKS,
            currentPage
        };
        expect(getLinks(currentPage)).toEqual(expectedAction)
    });

    it('should add link', () => {
        const link = {
            name: "link name",
            url: "link url",
            point: 0,
            id: new Date().getTime()
        };
        const expectedAction = {
            type: ADD_LINK,
            link
        };
        expect(addLink(link)).toEqual(expectedAction)
    });

    it('should delete link', () => {
        const linkId = new Date().getTime();
        const expectedAction = {
            type: DELETE_LINK,
            linkId
        };
        expect(deleteLink(linkId)).toEqual(expectedAction)
    });

    it('should upvote link', () => {
        const linkId = new Date().getTime();
        const expectedAction = {
            type: UP_VOTE,
            linkId
        };
        expect(upVote(linkId)).toEqual(expectedAction)
    });

    it('should downvote link', () => {
        const linkId = new Date().getTime();
        const expectedAction = {
            type: DOWN_VOTE,
            linkId
        };
        expect(downVote(linkId)).toEqual(expectedAction)
    });
});