import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CurrencyFinance = props => {
  return (
    <View style={styles.currencyFinanceContainer}>
      <Text style={styles.price}>Price (USD): ${props.item.quote.USD.price.toFixed(2)}</Text>
      <Text style={styles.maxSup}>Max. Supply: {Math.round(props.item.max_supply)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  currencyFinanceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  price: {
    fontSize: 16,
    marginRight: 10
  },
  maxSup: {
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return {
    item: state.currency.selectedCur
  };
}
;

CurrencyFinance.propTypes = {
  item: PropTypes.shape({
    quote: PropTypes.shape({
      USD: PropTypes.shape({
        price: PropTypes.number
      })
    })
  }).isRequired
}

export default connect(mapStateToProps)(CurrencyFinance);