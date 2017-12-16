import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    // will return a single library
    renderRow() {

    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

// takes global state object and provides it as props
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// connect() returns a function
export default connect(mapStateToProps)(LibraryList);
