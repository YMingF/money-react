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
  const findTagIndex=(id:number)=>{
    let result=-1  //为何多此一举定义它，因为为避免不存在id时return i返回数组长度
    for(let i=0;i<tags.length;i++){
      if(tags[i].id===id){
        result=i
        break
      }
    }
    return result
  }
  const updateTag=(id:number,obj:{name:string})=>{
      const index=findTagIndex(id)
      const tagsClone=JSON.parse(JSON.stringify(tags))
      tagsClone.splice(index,1,{id:id,name:obj.name})
      setTags(tagsClone)
  }
  return { tags,setTags,findTag,updateTag,findTagIndex  } //只能返回对象，而非数组，否则会报错.
}

export  {useTags}