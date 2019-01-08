import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinStyle}>
            <ActivityIndicator size={size || 'large'} color="#fab1a0" />
        </View>
    )
}
export { Spinner }

const styles = StyleSheet.create({
    spinStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})