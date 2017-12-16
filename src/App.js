import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; // glue between react and redux
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    // {{ flex: 1 }}, one{} is for JSX, one is for JS object
    return ( // Provider can only have one child
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText='Tech Stack' />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
