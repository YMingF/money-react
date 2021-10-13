import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

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
  value:number[];
  onChange:(selected:number[])=>void
}

const TagsSection:React.FC<Props>=(props)=>{
  const {tags,addTag}=useTags()
  const selectedTagIds=props.value

  const onToggleTag=(tagId:number)=>{
      const index=selectedTagIds.indexOf(tagId)
      if(index>=0){
        props.onChange(selectedTagIds.filter(t=>t!==tagId))
        //如果tag已被选中，就复制所有没被选中的tag 作为新的selectedTags
      }else{
        props.onChange([...selectedTagIds,tagId])
        //在之前的基础上新加一个tag进去
      }
  }
  const getClass=(tagId:number)=>selectedTagIds.indexOf(tagId)>=0?'selected':''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li key={tag.id} onClick={
            ()=>{onToggleTag(tag.id)}
          } className={getClass(tag.id)}
          >{tag.name}</li>
        )}

      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}
export  {TagsSection}