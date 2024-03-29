import { createStackNavigator, createAppContainer } from 'react-navigation';

import welcomeScreen from '../screens/WelcomeScreen';
import currencyListScreen from '../screens/CurrencyListScreen';
import currencyScreen from '../screens/CurrencyScreen';

const CryptoCurrencyNav = createStackNavigator(
    {
        welcomeScreen: {
            screen: welcomeScreen
        },
        currencyList: {
            screen: currencyListScreen
        },
        currencyItem: {
            screen: currencyScreen
        }
    },
    {
        initialRouteName: 'welcomeScreen'
    }
);

export default createAppContainer(CryptoCurrencyNav);