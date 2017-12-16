import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // import many things as we need all actions

class ListItem extends Component {
    render() {

        const { titleStyle } = styles;
        console.log(this.props);
        return (
            <TouchableWithoutFeedback>
                <CardSection>
                    <Text style={titleStyle}>
                        {this.props.library.title}
                    </Text>
                </CardSection>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(null, actions)(ListItem); // no mapToStateProps, so null
