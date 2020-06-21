import { createStore, combineReducers } from "redux";
import contentReducer from "../../content";
import tokenReducer from "../../token";

//perduodam reduceri
const allReducers = combineReducers(
    { content: contentReducer, authentication: tokenReducer }
)
//conectinam redux iskiepi: jei aplinka development(uztikrina sauguma) ir turim extention, daryt ta funkcija

const store = createStore(allReducers, process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;