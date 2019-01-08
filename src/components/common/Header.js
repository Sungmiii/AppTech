import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle} >{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 20,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 18,
    }
});

export { Header }