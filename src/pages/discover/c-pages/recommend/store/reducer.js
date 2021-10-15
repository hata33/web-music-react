import * as actionTypes from './constants'

const defaultState = ({
  topBanners: []
})

// 这里的action 是actionCreate 里的
function reducer(state = defaultState , action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return {...state, topBanners: action.topBanners};
    default:
      return state;
  }
}

export default reducer;