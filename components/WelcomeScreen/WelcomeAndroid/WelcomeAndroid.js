import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    StatusBar
} from 'react-native';
import PropType from 'prop-types';

import ButtonRouteAndroid from './ButtonRouteAndroid';

const WelcomeAndroid = props => (
    <View style={styles.container}>
        <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
        />
        <Animated.View style={[styles.titlesContainerAndroid, styles.animation]}>
            <Text style={styles.subTitle}>{props.title}</Text>
            <Text style={styles.title}>{props.subTitle}</Text>
        </Animated.View>
        <View style={styles.btnContainer}>
            <ButtonRouteAndroid 
                title='Search for Currencies Now!'
                bgColor={{ backgroundColor: 'white' }}
                textColor={{ color: 'rgba(98, 124, 244, 1)' }}
                route='currencyList'
                navigation={props.navigation} 
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(98, 124, 244, 1)',
        paddingTop: 120
    },
    titlesContainerAndroid: {
        borderRadius: 1000,
        height: 250,
        width: 250,

        paddingTop: 90,
        marginBottom: 100,

        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 2,
        alignSelf: 'center',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 100
    },
    subTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    btnContainer: {
        width: 100,
        justifyContent: "center",
        alignSelf: "center"
    }
});

WelcomeAndroid.propType = {
    animation: PropType.objectOf(PropType.string).isRequired,
    title: PropType.string.isRequired,
    subTitle: PropType.string.isRequired,
    navigation: PropType.shape({
        navigate: PropType.func
    }).isRequired,
}

export default WelcomeAndroid;