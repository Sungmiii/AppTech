import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                autoCapitalize="none"
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={label === 'Password' && true}
            // secureTextEntry={secureTextEntry} and place securetext only passwordinput
            />
        </View>
    )
}

export { Input }


const styles = StyleSheet.create({
    inputContainer: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        color: '#dfe6e9',
        lineHeight: 23,
        flex: 2
    }
})