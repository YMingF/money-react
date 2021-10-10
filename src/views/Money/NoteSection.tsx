import styled from 'styled-components';
import React, {useState} from 'react';

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
  console.log(note);
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder='在这里添加备注：'
               value={note}
               onChange={(e)=>setNote(e.target.value)}
        />
      </label>
    </Wrapper>
  )
}

export  {NoteSection}