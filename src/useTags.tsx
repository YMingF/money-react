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
  const findTag=(id:number)=>tags.filter(tag=>tag.id===id)[0]
  return { tags:tags,setTags:setTags,findTag:findTag  } //只能返回对象，而非数组，否则会报错.
}

export  {useTags}