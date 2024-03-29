import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import CryptoCurrencyNav from './navigation/CurrencyNavigator';

// Reducers
import currencyReducer from './store/reducers/currency';

const rootReducer = combineReducers({
  currency: currencyReducer
});

// Store
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

App = () => {
  return (
    <Provider store={store}>
      <CryptoCurrencyNav />
    </Provider>
  );
}

export default App;