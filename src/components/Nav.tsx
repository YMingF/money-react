import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';
const NavWrapper=styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      width: 33.3333%;
      text-align: center;
      >a{
        display: flex; //可将a标签自动变成块元素
        flex-direction: column;
        padding: 4px 0;
        align-items: center;
        .icon{
          width: 24px;
          height: 24px;
          fill:currentColor;
        }
        &.selected{
          color:red
        }
      }
    }
  }
`
const Nav=()=>{
  return (
    <NavWrapper>
      <ul>
        <li>

          <NavLink to="/tags"  activeClassName='selected'>
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>

          <NavLink to="/money" activeClassName='selected'>
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>

          <NavLink to="/statistics" activeClassName='selected'>
            <Icon name="chart"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export  default  Nav

