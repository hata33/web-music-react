import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreateors'

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

export default memo(function TopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch();

  const bannerRef = useRef();
  
  useEffect(() => {
        dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    // setTimeout(() => {
      setCurrentIndex(to);
    // }, 0);
  }, []);

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <BannerWrapper bgImage={bgImage} ref={bannerRef}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay beforeChange={bannerChange} ref={bannerRef}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
