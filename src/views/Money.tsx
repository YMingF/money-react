import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';

//css in js的使用

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category='-'|'+'
function Money() {
  const [selected,setSelected]=useState({
    tags:[] as string[],
    note:'',
    category:'-' as Category,
    amount:0
  })
  return (
    <MyLayout>
      {selected.tags}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <TagsSection value={selected.tags}
                   onChange={(tags)=>setSelected({
                     ...selected,//先把之前的值拷贝过来
                     tags:tags //然后再专门设置tags的值
                   })}
      />
      <NoteSection value={selected.note}
                   onChange={(note)=>{
                     setSelected({
                       ...selected,
                       note:note
                     })
                   }}
        />
      <CategorySection value={selected.category}
                       onChange={(category)=>{
                         setSelected({
                           ...selected,
                           category:category
                         })
                       }}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount)=>{
                          setSelected({
                            ...selected,
                            amount:amount
                          })
                        }}
                        onOk={()=>{}} //这里在定义我们点击OK时的操作
      />
    </MyLayout>
  )
}

export  default  Money
