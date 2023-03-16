import React, { useReducer } from 'react';
import ClothContext from './clothContext';
import clothReducer from './clothReducer';

const ClothProvider = props => {
    const initialState = {
        closetClothes: [],
        marketClothes: [],
        currentCloth: null,
        loading: true
    };

    const [state, dispatch] = useReducer(clothReducer, initialState);

    // Get all Clothes
    const getClosetClothes = async () => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch('/current-clothes');
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_CLOSET_CLOTHES', payload: data });
        } catch (err) {
            console.log(err);
        }
    };
    // Get Market Data
    const getMarketClothes = async () => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch('/market-clothes');
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_MARKET_CLOTHES', payload: data });
        } catch (err) {
            console.log(err);
        }
    };
    // Get Clothes By Type
    const getClothesByType = async clothtype => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch(`/current-clothes/${clothtype}`);
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_CURRENT_CLOTH', payload: data });
        } catch (err) {
            console.log(err);
        }
    };
    // AddToCloset
    const addToClothingList = (item) => {
        console.log(item)
        try {
            fetch("/current-clothes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            }
            );
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ClothContext.Provider
            value={{
                closetClothes: state.closetClothes,
                currentCloth: state.currentCloth,
                marketClothes: state.marketClothes,
                loading: state.loading,
                getClosetClothes: getClosetClothes,
                getMarketClothes: getMarketClothes,
                getClothesByType,
                addToCloset: addToClothingList,
            }}
        >
            {props.children}
        </ClothContext.Provider>
    );
};

export default ClothProvider;