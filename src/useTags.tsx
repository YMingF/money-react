import {useEffect, useRef, useState} from 'react';
import {createId} from './lib/createId';
import {useUpdate} from './hooks/useUpdate';
const useTags=()=>{//封装自定义Hook
  const [tags,setTags]=useState<{id:number;name:string}[]>([])

  useEffect(()=>{  //组件挂载时执行，每次切换页面就会重新挂载
    let localTags=(JSON.parse(window.localStorage.getItem('tags')||'[]'))
    //这里是避免新打开应用发现没内容,也避免之前每次渲染都执行defaultValue导致id增加4个
    if (localTags.length===0){
      localTags=[
        {id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name:'住'},
        {id:createId(),name:'行'}
      ]
    }
    setTags(localTags)
  },[])
  useUpdate(()=>{
    console.log('set item');
    console.log(JSON.stringify(tags));
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])
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
    setTags(tags.map(tag=>tag.id===id?{id:id,name:obj.name}:tag))
  }
  const deleteTag=(id:number)=>{
    setTags(tags.filter(tag=>tag.id!==id))
  }
  const addTag=()=>{
    const tagName=window.prompt('新标签的名称为：')
    if(tagName!==null && tagName!==''){
      setTags([...tags, {id:createId(),name:tagName}])
    }
  }
  return { tags,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag  } //只能返回对象，而非数组，否则会报错.
}

export  {useTags}