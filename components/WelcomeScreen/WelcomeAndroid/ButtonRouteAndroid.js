import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import PropType from 'prop-types';

const ButtonRouteAndroid = props => (
    <TouchableOpacity
        style={[styles.container, props.bgColor]}
        onPress={() => {
            props.navigation.navigate({ routeName: props.route });
        }}
    >
        <Text style={[styles.text, props.textColor]}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 270,
        marginTop: 40,
        padding: 10,
        borderRadius: 150,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    }
});

ButtonRouteAndroid.propTypes = {
    title: PropType.string.isRequired,
    bgColor: PropType.objectOf(PropType.string).isRequired,
    textColor: PropType.objectOf(PropType.string).isRequired,
    navigation: PropType.shape({
        navigate: PropType.func
    }).isRequired,
    route: PropType.string.isRequired
}

export default ButtonRouteAndroid;