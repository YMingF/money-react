import {useEffect, useRef} from 'react';

const useUpdate=(fn:()=>void,deps:any[])=>{

const count=useRef(0)
useEffect(()=>{
  count.current+=1
})
useEffect(()=>{
  if(count.current>1){ //用于避免第一次tags从undefined变为[]时去执行下面的setItem
    fn()
  }
// eslint-disable-next-line
},deps)
}

export {useUpdate}