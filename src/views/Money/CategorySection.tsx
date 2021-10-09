import styled from 'styled-components';

const CategorySection=styled.section`
  font-size: 24px;
  >ul{
    display: flex;
    background-color: #c4c4c4;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content:"";
        display: block;
        height: 3px;
        background-color: #333;
        position: absolute;
        bottom: 0;
        left: 0;
        width:100%;//加了绝对定位的元素宽度会成为0,所以要加这个
      }
    }
  }
`



export  {CategorySection}