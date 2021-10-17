import React, { memo } from 'react'
import { getCount, getSizeImage } from '../../utils/format-utils'
import { SongsCoverWrapper } from './style';

export default memo(function SongsCover(props) {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
      </div>
    </SongsCoverWrapper>
  )
})
