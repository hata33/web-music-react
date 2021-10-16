import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreateors'


// import {
//   RecommendWrapper,
//   Content,
// } from './style'

function Recommend(props) {
  const { topBanners } = useSelector(state => ({
    // topBanners : state.recommend.topBanners
    // topBanners : state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch();
  
  useEffect(() => {
        dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      RecommendP{topBanners.length}
    </div>
  )
}

export default memo(Recommend);




