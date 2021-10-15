import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner'

import {
  RecommendWrapper,
  Content
} from './style'

export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content>

      </Content>
    </RecommendWrapper>
  )
})
