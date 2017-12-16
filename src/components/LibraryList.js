import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}

// takes global state object and provides it as props
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// connect() returns a function
export default connect(mapStateToProps)(LibraryList);
