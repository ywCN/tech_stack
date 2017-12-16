import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return;
    }
}

// takes global state object and provides it as props
const mapStateToProps = state => {
    console.log(state);
};

// connect() returns a function
export default connect(mapStateToProps)(LibraryList);
