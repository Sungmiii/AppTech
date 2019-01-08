import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export { Button }

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        backgroundColor: '#fab1a0',
        borderRadius: 5,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 290
    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
})