import * as actionTypes from './constants';

import { 
  getTopBanners,
} from '@/services/recommend';

// 把获取的数据传到reducer 对于带有网络请求的Action 要加个这个
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res);
      dispatch(changeTopBannerAction(res))
    })
  }
}