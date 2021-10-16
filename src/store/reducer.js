// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'

// 这个合并会很频繁，每个reducer合并都会执行。combineReducers
const cReduer = combineReducers({
  recommend: recommendReducer
})

export default cReduer;            