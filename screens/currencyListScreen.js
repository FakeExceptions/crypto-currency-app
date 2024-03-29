import React, { PureComponent } from 'react';
import {
    StyleSheet,
    FlatList,
    StatusBar,
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../store/actions/index';
import Item from '../components/CurrencyList/Item';

class CurrencyListScreen extends PureComponent {
    static navigationOptions = {
        header: null
    }

    state = {
        searchName: '',
        searchList: [],
        isSeaching: false
    }

    async componentDidMount() {
        await this.props.onFetchCurrencies();
    }

    searchCurrency = curName => {
        const name = curName.trim();
        if (name !== '') {
            const newList = this.props.list.map(currency => {
                if (currency.name.includes(name)) {
                    return currency
                }
            }).filter(c => c !== undefined);

            this.setState({
                searchName: name,
                searchList: newList,
                isSeaching: true
            });
        } else {
            this.setState({
                searchName: '',
                searchList: [],
                isSeaching: false
            });
        }
    }

    selectCurrency = currencyId => {
        this.props.onSelectCurrency(currencyId);
        this.setState({
            searchName: '',
            searchList: [],
            isSeaching: false
        });
        this.props.navigation.navigate({ routeName: 'currencyItem' });
    }

    render() {
        return (
            < View style={styles.itemContainer} >
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Currency by Name"
                    value={this.state.searchName}
                    onChangeText={this.searchCurrency}
                />
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    onRefresh={async () => await this.props.onFetchCurrencies()}
                    refreshing={this.props.loading ? true : false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    data={
                        this.state.isSeaching ?
                            this.state.searchList :
                            this.props.list
                    }
                    renderItem={itemData => (
                        <Item selectCurrency={this.selectCurrency} item={itemData.item} />
                    )}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 20,
        paddingVertical: 10
    },
    searchInput: {
        marginTop: 50,
        marginBottom: 25,
        alignSelf: 'center'
    },
    loadingContainer: {
        height: '100%',
        marginTop: 20,
        alignContent: "center",
    },
    loadingText: {
        textAlign: "center",
        fontSize: 20
    }
});

const mapStateToProps = state => {
    return {
        list: state.currency.currencyList,
        loading: state.currency.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCurrencies: () => dispatch(actions.fetchData()),
        onSelectCurrency: id => dispatch(actions.selectedItem(id))
    }
}

CurrencyListScreen.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    onFetchCurrencies: PropTypes.func.isRequired,
    onSelectCurrency: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListScreen);