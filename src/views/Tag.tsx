import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

type Params={
  id:string
}
const Topbar=styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 20px;
    padding: 14px;
    background-color: white;
  

`
const InputWrapper=styled.div`
  background-color: white;
  padding:0 16px ;
  margin-top: 8px;
`
const Tag:React.FC=()=>{
  const {findTag,updateTag}=useTags()
  let { id:idString } = useParams<Params>(); //{id:idString}意思就是将id重命名为idString
  const tag=findTag(parseInt(idString))
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon />   {/*加个空图标实现左中右布局*/}
      </Topbar>
      <InputWrapper>
        <Input label='标签名' type='text' placeholder='标签名' value={tag.name}
            onChange={(e)=>{
              updateTag(tag.id,{name:e.target.value});
            }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
        <Space/>
      </Center>
    </Layout>
  )
}
export {Tag}