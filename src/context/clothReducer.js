// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case 'SET_CLOSET_CLOTHES':
            return {
                ...state,
                closetClothes: action.payload
            };
        case 'SET_CURRENT_CLOTH':
            return {
                ...state,
                currentCloth: action.payload
            };
        case 'SENDING_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'REQUEST_FINISHED':
            return {
                ...state,
                loading: false
            };
        case 'SET_MARKET_CLOTHES':
            return {
                ...state,
                marketClothes: action.payload
            };
        default:
            return state;
    }
};