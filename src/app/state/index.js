import { createStore, combineReducers, applyMiddleware } from "redux";
import content from "../../content";
import authentication from "../../authentication";
import middleware from "./middleware";
import { composeWithDevTools } from 'redux-devtools-extension'; //kai middleware naudoji tada sitas

const allMiddleware = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware);

// [log, process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()].filter(Boolean);


//perduodam reduceri
const allReducers = combineReducers(
    { content: content.reducer, authentication: authentication.reducer }, allMiddleware);
//conectinam redux iskiepi: jei aplinka development(uztikrina sauguma) ir turim extention, daryt ta funkcija

const store = createStore(allReducers)

export default store;