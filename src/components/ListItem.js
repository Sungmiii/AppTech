import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends React.Component {
    render() {
        return (
            <CardSection>
                <Text style={styles.titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

export default connect(null, actions)(ListItem)