import {useState} from 'react';
import {createId} from './lib/createId';
const defaultTags=[
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'}
]
const useTags=()=>{//封装自定义Hook
  const [tags,setTags]=useState<{id:number;name:string}[]>(defaultTags)
  return {  tags:tags,setTags:setTags  } //只能返回对象，而非数组，否则会报错.
}

export  {useTags}