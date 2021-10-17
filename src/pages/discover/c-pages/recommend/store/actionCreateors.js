import * as actionTypes from './constants';

import { 
  getTopBanners,
  getHotRecommends,
} from '@/services/recommend';

// 把获取的数据传到reducer 对于带有网络请求的Action 要加个这个
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      console.log(res);
      dispatch(changeHotRecommendAction(res))
    })
  }
}