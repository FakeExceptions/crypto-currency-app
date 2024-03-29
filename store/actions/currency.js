import * as actionTypes from './actionTypes';
import axios from 'axios';

///////////////////////
// GET DATA FROM API //
///////////////////////

// Handling Loading
const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_CURRENCY_DATA_START
    };
};

// In case Fetch is Successful
const fetchDataSuccess = data => {
    return {
        type: actionTypes.FETCH_CURRENCY_DATA_SUCCESS,
        currencyList: data
    };
};

// In case Fetch Fails
const fetchDataFail = error => {
    return {
        type: actionTypes.FETCH_CURRENCY_DATA_FAIL,
        error
    };
};

//Fetching Data From API
export const fetchData = () => {
    return async dispatch => {
        dispatch(fetchDataStart());
        try {
            const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
            const response = await axios.get(url, {
                qs: {
                    'start': '1',
                    'limit': '1',
                    'convert': 'USD,BTC'
                },
                headers: {
                    'X-CMC_PRO_API_KEY': '4d3c2c59-cc1c-407f-893d-41e054ef8f2f'
                },
                json: true,
                gzip: true
            });
            return dispatch(fetchDataSuccess(response.data.data));
        } catch (error) {
            return dispatch(fetchDataFail(error));
        }
    };
};

///////////////////////
// GET SELECTED ITEM //
///////////////////////

export const selectedItem = itemId => {
    return {
        type: actionTypes.GET_SELECTED_ITEM,
        id: itemId
    }
}