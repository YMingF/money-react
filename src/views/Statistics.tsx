import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import  day from 'dayjs'
const CategoryWrapper=styled.div`
      background-color: white;
`
const Item=styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    font-size: 18px;
    line-height: 20px;
    padding:10px 16px;
    >.note{
      margin-right: auto;
      margin-left: 16px;
      color: #999;
    }
`

const Header=styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding:10px 16px;
`
function Statistics() {
  const [category,setCategory]=useState<'-'|'+'>('-')
  const {records}=useRecords()
  const {getName}=useTags()
  const hash:{[K:string]:RecordItem[]}={}
  const selectedRecords=records.filter(r=>r.category===category) //得到和我当前选中类型相同的所有数据
  selectedRecords.forEach(r=>{
    const key=day(r.createdAt).format('YYYY年-MM月-DD日')
    if (!(key in hash)){
      hash[key]=[]
    }
    hash[key].push(r)
  })
  //a,b就代表相互比较的两项
  const array=Object.entries(hash).sort((a,b)=>{
    if (a[0]===b[0]) return 0
    if (a[0]>b[0]) return -1
    if (a[0]<b[0]) return 1
    return 0
  })
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={value=>setCategory(value)}/>
      </CategoryWrapper>

      {array.map(([date,records])=><div>
        <Header>{date}</Header>
        <div>
          {records.map(r=>{
            return <Item >
              <div className="tags">
                {r.tagIds
                  .map(tagId=><span key={tagId}>{getName(tagId)}</span>)
                  .reduce((result,span,index,array)=>
                    result.concat(index<array.length-1?[span,'，']:[span]),[] as ReactNode[])
                }
              </div>
              {r.note&&<div className="note">
                {r.note}
              </div>
              }
              <div className="amount">
                ￥{r.amount}
              </div>
            </Item>
          })}
        </div>
      </div>)}
    </Layout>
  )
}
export  default  Statistics
