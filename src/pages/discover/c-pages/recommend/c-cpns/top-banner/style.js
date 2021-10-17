import styled from 'styled-components';
import bgRight from '@/assets/img/download.png';
import btn from '@/assets/img/banner_sprite.png';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 285px;
    /* background-color: red; */

    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      height: 100%;
    }
  }
  /* .ant-carousel .slick-dots li button{
    display:block;
    background: url(${btn}) no-repeat 0 9999px;
    width:20px;
    height: 20px;
    background-position: -16px -346px;
  } */

`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height:285px;
  background: url(${bgRight});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${btn});
    background-color: transparent;
    cursor: pointer;
    margin-top: -31px;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`