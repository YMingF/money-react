import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
const Wrapper=styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Main=styled.div`
    flex-grow: 1;
    overflow: auto;
`
type Props={
    className?:string //定义成函数组件之后无法直接props.className，所以需要自定义
    scrollTop?:number
}
const Layout:React.FC<Props>=(props)=>{
    const mainRef=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        setTimeout(()=>{ //设置延时是因为刚开始没内容，自然没滚动条，所以需要等些时间，在设置scrollTop
            if (! mainRef.current){return}
            mainRef.current.scrollTop=props.scrollTop!
        },0)

    },[props.scrollTop])
    return (
      <Wrapper>
        <Main ref={mainRef} className={props.className}>
          {/*//传入的子内容*/}
          {props.children}
        </Main>
        <Nav />
      </Wrapper>
    )
}
Layout.defaultProps={
    scrollTop:0
}

export default Layout;

