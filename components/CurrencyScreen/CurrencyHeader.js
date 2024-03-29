import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CurrencyHeader = props => (
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.item.name} </Text>
        <Text style={styles.subTitleText}>( {props.item.symbol} )</Text>
    </View>
);

const styles = StyleSheet.create({
    titleContainer: {
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(98, 124, 244, 1)'
    },
    titleText: {
        fontSize: 40,
        color: 'white'
    },
    subTitleText: {
        color: 'white'
    }
});

const mapStateToProps = state => {
    return {
        item: state.currency.selectedCur
    };
};

CurrencyHeader.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        symbol: PropTypes.string
    }).isRequired
}

export default connect(mapStateToProps)(CurrencyHeader);