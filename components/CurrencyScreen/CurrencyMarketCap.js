import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CurrencyMarketCap = props => {
    return (
        <View style={styles.marketCapConteiner}>
            <Text style={styles.marketCapText}>Market Cap: {props.item.quote.USD.market_cap.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    marketCapConteiner: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: 'rgba(98, 124, 244, 1)'
    },
    marketCapText: {
        fontSize: 17,
        color: 'white'
    }
});

const mapStateToProps = state => {
    return {
        item: state.currency.selectedCur
    };
};

CurrencyMarketCap.propTypes = {
    item: PropTypes.shape({
        quote: PropTypes.shape({
            USD: PropTypes.shape({
                market_cap: PropTypes.number
            })
        })
    }).isRequired
}

export default connect(mapStateToProps)(CurrencyMarketCap);