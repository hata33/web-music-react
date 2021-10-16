import React, { memo, useEffect } from 'react'
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBanners } from '../../../../services/recommend'
import { getTopBannerAction } from './store/actionCreateors'

import TopBanner from './c-cpns/top-banner'

import {
  RecommendWrapper,
  Content,
} from './style'

function Recommend(props) {
  console.log(props, '12');
  // console.log(state);
  // 组件redux关联： 获取数据和进行操作
  // 第一个参数是回调函数state，要求有一个返回值，作为useSelector的返回值

  // 获取redux 中存储的state
  const { topBanners } = useSelector(state => ({
    topBanners : state.recommend.topBanners
  }))
  // 返回Redux store中对dispatch函数的引用。直接获取dispacth对象
  const dispatch = useDispatch();
  
  // 派发action
  useEffect(() => {
    // 直接派发这个action
        dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      RecommendP{topBanners.length}
    </div>
  )
}

export default memo(Recommend);




