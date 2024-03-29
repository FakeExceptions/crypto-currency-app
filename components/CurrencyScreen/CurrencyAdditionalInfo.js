import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';
import PropTypes from 'prop-types';

const CurrencyAdditionalInfo = props => {
  Moment.locale('en');
  const dateCreated = props.item.date_added;
  const dateUpdated = props.item.quote.USD.last_updated;

  return (
    <View style={styles.additionalInfoContainer}>
      <Text style={styles.additionalInfoTitle}>Additional Info:</Text>
      <Text style={styles.additionalInfoText}>
        Creation Date: {Moment(dateCreated).format('MMM d, YYYY')}
      </Text>
      <Text style={styles.additionalInfoText}>
        Data Updated in: {Moment(dateUpdated).format('MMM d - HH:mm:ss')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  additionalInfoContainer: {
    height: '100%',
    backgroundColor: 'rgba(98, 124, 244, 1)',
    paddingTop: 20,
    paddingHorizontal: 10
  },
  additionalInfoTitle: {
    fontSize: 25,
    marginBottom: 20,
    color: "white"
  },
  additionalInfoText: {
    paddingBottom: 10,
    color: "white",
    fontSize: 15
  }
});

const mapStateToProps = state => {
  return {
    item: state.currency.selectedCur
  };
};

CurrencyAdditionalInfo.propTypes = {
  item: PropTypes.shape({
    date_added: PropTypes.string,
    quote: PropTypes.shape({
      USD: PropTypes.shape({
        last_updated: PropTypes.string
      })
    })
  }).isRequired
}

export default connect(mapStateToProps)(CurrencyAdditionalInfo);