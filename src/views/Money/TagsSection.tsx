import styled from 'styled-components';

const TagsSection=styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; //让标签尽量靠下
  align-items: flex-start; //让新建标签靠左
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
export  {TagsSection}