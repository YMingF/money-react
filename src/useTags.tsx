import {useState} from 'react';

const useTags=()=>{//封装自定义Hook
  const [tags,setTags]=useState<string[]>(['衣','食', '住','行'])
  return {  tags:tags,setTags:setTags  } //只能返回对象，而非数组，否则会报错.
}

export  {useTags}