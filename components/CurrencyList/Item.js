import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';

const Item = props => (
    <View>
        <TouchableOpacity onPress={() => props.selectCurrency(props.item.id)}>
            <View style={styles.item}>
                <Text style={styles.itemFont}>{props.item.name}</Text>
            </View>
        </TouchableOpacity>
    </View>

);

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        marginHorizontal: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(98, 124, 244, 1)'
    },
    itemFont: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});

export default Item;