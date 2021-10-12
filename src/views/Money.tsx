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
  //Partial表示<>里类型的部分类型
  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({...selected,...obj })
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={tags=>onChange({tags:tags})}
      />
      <NoteSection value={selected.note}
                   onChange={note=>onChange({note:note})}
        />
      <CategorySection value={selected.category}
                       onChange={category=>onChange({category:category})
                       }/>
      <NumberPadSection value={selected.amount}
                        onChange={amount=>onChange({amount:amount})}
                        onOk={()=>{}} //这里在定义我们点击OK时的操作
      />
    </MyLayout>
  )
}

export  default  Money
