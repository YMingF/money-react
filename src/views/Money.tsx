import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';

//css in js的使用

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category='-'|'+'
const defaultFormData={
  tagIds:[] as number[],
  note:'',
  category:'-' as Category,
  amount:0
}
const CategoryWrapper=styled.div`
      background-color: #c4c4c4;
`
function Money() {
  const [selected,setSelected]=useState(defaultFormData)
  const {addRecord}=useRecords()
  //Partial表示<>里类型的部分类型
  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({...selected,...obj })
  }
  const submit=()=>{
      if (addRecord(selected)){
        alert('保存成功')
        setSelected(defaultFormData)
      }
  }
  return (
    <MyLayout scrollTop={9999}>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds=>onChange({tagIds})}
      />
      <NoteSection value={selected.note}
                   onChange={note=>onChange({note})}
        />
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={category=>onChange({category}) }/>
      </CategoryWrapper>

      <NumberPadSection value={selected.amount}
                        onChange={amount=>onChange({amount})}
                        onOk={submit} //这里在定义我们点击OK时的操作
      />
    </MyLayout>
  )
}

export  default  Money
