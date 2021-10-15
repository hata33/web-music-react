import { combineReducers } from 'redux';

import { reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'

const cReduer = combineReducers({
  recommend: recommendReducer
})

export default cReduer;