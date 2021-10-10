import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper=styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; //让标签尽量靠下
  align-items: flex-start; //让新建标签靠左
  >ol{
    margin: 0 -12px;
    >li{
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin:8px 12px; //让标签的左右两边各12px所以两个标签间就间隔24px
      &.selected{
        background-color: #333;
        color:white;
      }
    }
  }
  >button{
    background: none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color:#666;
    margin-top: 8px;
  }
`

type Props={
  value:string[];
  onChange:(selected:string[])=>void
}

const TagsSection:React.FC<Props>=(props)=>{
  const [tags,setTags]=useState<string[]>(['衣','食', '住','行'])
  const selectedTags=props.value
  const onAddTag=()=>{
     const tagName=window.prompt('新标签的名称为：')
    if(tagName!==null){
        setTags([...tags,tagName])
      }
  }
  const onToggleTag=(tag:string)=>{
      const index=selectedTags.indexOf(tag)
      if(index>=0){
        props.onChange(selectedTags.filter(t=>t!==tag))
        //如果tag已被选中，就复制所有没被选中的tag 作为新的selectedTags
      }else{
        props.onChange([...selectedTags,tag])
        //在之前的基础上新加一个tag进去
      }
  }
  const getClass=(tag:string)=>selectedTags.indexOf(tag)>=0?'selected':''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li key={tag} onClick={
            ()=>{onToggleTag(tag)}
          } className={getClass(tag)}
          >{tag}</li>
        )}

      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}
export  {TagsSection}