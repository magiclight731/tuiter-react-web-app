import React from "react";
//import ExplorePage from "./explore/ExplorePage";
import HomePage from "./homenew";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <HomePage/>
        </Provider>
    );
}

export default Tuiter

