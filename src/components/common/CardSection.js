import React from 'react'
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.cardsecStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardsecStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
})

export { CardSection }

