import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
})

// 这里的action 是actionCreate 里的
function reducer(state = defaultState , action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return {...state, topBanners: action.topBanners};
      // 此处返回的是一个新的对象
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    default:
      return state;
  }
}

export default reducer;