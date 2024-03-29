import React from 'react';
import { View } from 'react-native';

import CurrencyHeader from '../components/CurrencyScreen/CurrencyHeader';
import CurrencyChanges from '../components/CurrencyScreen/CurrencyChanges';
import CurrencyFinance from '../components/CurrencyScreen/CurrencyFinance';
import CurrencyMarketCap from '../components/CurrencyScreen/CurrencyMarketCap';
import CurrencyAdditionalInfo from '../components/CurrencyScreen/CurrencyAdditionalInfo';

const CurrencyScreen = () => (
  <View>
    <CurrencyHeader />
    <CurrencyFinance />
    <CurrencyMarketCap />
    <CurrencyChanges />
    <CurrencyAdditionalInfo />
  </View>
);

export default CurrencyScreen;