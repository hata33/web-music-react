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

  // 组件redux关联： 获取数据和进行操作
  // 返回Redux store中对dispatch函数的引用。直接获取dispacth对象
  const dispatch = useDispatch();
   
  useEffect(() => {
    // 直接派发这个action
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      Recommend
    </div>
  )
}

export default memo(Recommend);




