import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper=styled.section`
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

type Props={
  value:'-'|'+';
  onChange:(value:'-'|'+')=>void
}
const CategorySection:React.FC<Props>=(props)=>{
  const categoryMap={'-':'支出','+':"收入"}
  type Keys=keyof typeof categoryMap
  const [categoryList]=useState<Keys[]>(['-','+'])
  const category=props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li key={c}
            className={category===c?'selected':''}
              onClick={()=>{props.onChange(c)}}
          >{categoryMap[c]}</li>
        )}
      </ul>

    </Wrapper>
  )
}


export  {CategorySection}