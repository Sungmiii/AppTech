import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import ListItem from './ListItem'

class LibraryList extends React.Component {
    renderItem(library) {
        console.log('what data ', library.item.id)
        return <ListItem library={library.item} />
    }
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => { return String(library.id) }}
            />


        )
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
}

export default connect(mapStateToProps)(LibraryList)