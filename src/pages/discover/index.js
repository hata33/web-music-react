import React, { memo, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';

import { discoverMenu } from '@/common/local-data';
import request from '@/services/request'

import { NavLink } from 'react-router-dom';
import {
  DiscoverWrapper,
  TopMenu
} from './style'

export default memo(function Discover(props) {
  console.log(props);

  useEffect(() => {
    request({
      url: "/banner"
    }).then( res => {
      console.log(res);
    })
  })

  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      123
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
