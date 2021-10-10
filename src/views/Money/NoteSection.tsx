import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper=styled.section`
  background: #f4f4f4;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{margin-right: 16px}
    >input{
      flex-grow: 1;
      height: 72px;
      background:none;
      border:none
      
    }
  }
`
const NoteSection:React.FC=()=>{
  const [note,setNote]=useState('') //用于容纳输入的备注
  const refInput=useRef<HTMLInputElement>(null)
  const onBlur=()=>{
    if(refInput.current!==null){
      setNote(refInput.current.value)
      console.log(refInput.current.value);
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder='在这里添加备注：'
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur} //鼠标移出时执行
        />
      </label>
    </Wrapper>
  )
}

export  {NoteSection}