import React, { memo } from 'react';

import TopBanner from './c-cpns/top-banner';
import {
  RecommendWrapper,
  Content,
} from './style'

function Recommend(props) {


  return (
    <RecommendWrapper>
      <TopBanner/>
    </RecommendWrapper>
  )
}

export default memo(Recommend);




