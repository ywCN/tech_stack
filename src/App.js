import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; // glue between react and redux
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => {
    return ( // Provider can only have one child
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText='Tech Stack' />
                ....
                .
                ...
            </View>
        </Provider>
    );
};

export default App;
