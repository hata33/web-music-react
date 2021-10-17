import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';


import ThemeHeaderRCM from '@/components/theme-header-rcm';
import SongsCover from '@/components/songs-cover';

import {
  HotRecommendWrapper
} from './style';
import { getHotRecommendAction } from '../../store/actionCreateors';

export default memo(function HotRecommend() {
  
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction( 8 ))
  }, [dispatch])
console.log(hotRecommends, 123);
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <SongsCover key={item.id} info={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
