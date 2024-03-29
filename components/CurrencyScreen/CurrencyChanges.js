import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CurrencyChanges = props => {
    let isPositive1h = false;
    let isPositive24h = false;
    let isPositive7d = false;

    if (props.item.quote.USD.percent_change_1h.toFixed(2) > 0) {
        isPositive1h = true
    }

    if (props.item.quote.USD.percent_change_24h.toFixed(2) > 0) {
        isPositive24h = true
    }
    
    if (props.item.quote.USD.percent_change_7d.toFixed(2) > 0) {
        isPositive7d = true
    }

    return (
        <View style={styles.changesContainer}>
            <Text style={styles.changesTitle}>Past Changes</Text>
            <Text style={
                isPositive1h ?
                    styles.changesTextPositive :
                    styles.changesTextNegative
            }>
                1 hour: {props.item.quote.USD.percent_change_1h.toFixed(2)}%
            </Text>
            <Text style={
                isPositive24h ?
                    styles.changesTextPositive :
                    styles.changesTextNegative
            }>
                24 hour: {props.item.quote.USD.percent_change_24h.toFixed(2)}%
            </Text>
            <Text style={
                isPositive7d ?
                    styles.changesTextPositive :
                    styles.changesTextNegative
            }>
                One week: {props.item.quote.USD.percent_change_7d.toFixed(2)}%
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    changesContainer: {
        backgroundColor: 'white',
        padding: 10
    },
    changesTitle: {
        color: 'rgba(98, 124, 244, 1)',
        marginBottom: 10,
        fontSize: 20
    },
    changesTextPositive: {
        color: 'green',
        fontSize: 15
    },
    changesTextNegative: {
        color: 'red',
        fontSize: 15
    }
});

const mapStateToProps = state => {
    return {
        item: state.currency.selectedCur
    }
}

CurrencyChanges.propTypes = {
    item: PropTypes.shape({
        quote: PropTypes.shape({
            USD: PropTypes.shape({
                percent_change_1h: PropTypes.number,
                percent_change_24h: PropTypes.number,
                percent_change_7d: PropTypes.number
            })
        })
    }).isRequired
}

export default connect(mapStateToProps)(CurrencyChanges);