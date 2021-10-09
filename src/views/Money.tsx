import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

//css in js的使用
const TagsSection=styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  >ol{
    margin: 0 -12px;
    >li{
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin:8px 12px; //让标签的左右两边各12px所以两个标签间就间隔24px
    }
  }
  >button{
    background: none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color:#666;
    margin-top: 8px;
  }
`
const NotesSection=styled.section`
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
const CategorySection=styled.section`
  font-size: 24px;
  >ul{
    display: flex;
    background-color: #c4c4c4;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content:"";
        display: block;
        height: 3px;
        background-color: #333;
        position: absolute;
        bottom: 0;
        left: 0;
        width:100%;//加了绝对定位的元素宽度会成为0,所以要加这个
      }
    }
  }
`

const NumberPadSection=styled.section`
    display: flex;
  flex-direction: column;
  >.output{
    background-color: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
                inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  >.pad{
    
    >button{
      float: left;
      width: 25%;
      height:64px;
      font-size: 18px;
      border: none;
      &.ok{
        float: right;
        height:128px
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1){
          background-color: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(5){
        background-color:  #E0E0E0;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background-color:  #D3D3D3;
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background-color:  #C1C1C1;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background-color:  #B8B8B8;
      }
      &:nth-child(12){
        background-color:  #9A9A9A;
      }
      &:nth-child(14){
        background-color:  #A9A9A9;
      }
      }
      
  }
`

function Money() {
  return (
    <Layout>
        <TagsSection >
          <ol>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ol>
          <button>新增标签</button>
        </TagsSection>
      <NotesSection >
        <label> 
          <span>备注</span>
          <input type="text" placeholder='在这里添加备注：'/>
        </label>
      </NotesSection>
      <CategorySection >
        <ul>
          <li className='selected'>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection >
        <div className='output'>100</div>
        <div className='pad clearFix'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className='ok'>OK</button>
          <button className='zero'>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  )
}

export  default  Money
