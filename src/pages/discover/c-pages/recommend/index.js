import React, { memo } from 'react';

import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style'

function Recommend(props) {


  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
        </RecommendLeft>
        <RecommendRight>
          
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend);




