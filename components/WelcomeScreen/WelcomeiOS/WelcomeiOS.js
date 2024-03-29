import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    StatusBar
} from 'react-native';
import PropType from 'prop-types';

import ButtonRouteIOS from './ButtonRouteIOS';

const WelcomeiOS = props => (
    <View style={styles.container}>
        <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
        />
        <Animated.View style={[styles.titlesContainerIos, props.animation]}>
            <Text style={styles.subTitle}>{props.title}</Text>
            <Text style={styles.title}>{props.subTitle}</Text>
            <ButtonRouteIOS
                navigation={props.navigation}
                title='Search for Currencies Now!'
                bgColor={{ backgroundColor: 'white' }}
                textColor={{ color: 'rgba(98, 124, 244, 1)' }}
                route='currencyList'
            />
        </Animated.View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(98, 124, 244, 1)',
        paddingTop: 200
    },
    titlesContainerIos: {
        height: 300,
        width: 300,
        paddingTop: 120,
        borderRadius: 1000,
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
    }
});

WelcomeiOS.propType = {
    animation: PropType.objectOf(PropType.string).isRequired,
    title: PropType.string.isRequired,
    subTitle: PropType.string.isRequired,
    navigation: PropType.shape({
        navigate: PropType.func
    }).isRequired,
}

export default WelcomeiOS;