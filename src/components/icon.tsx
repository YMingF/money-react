import React from 'react';
import cs from 'classnames'
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props={
  name?:string
} & React.SVGAttributes<SVGElement> //确保能接收到onClick事件
const Icon=(props:Props)=>{
  const {name,children,className,...rest}=props //拿出className避免你给我传样式导致显示混乱
  return (
    <svg className={cs('icon',className)} {...rest}>

      {props.name && <use xlinkHref={'#'+props.name} />}   {/*你传了name再去使用svg*/}
    </svg>
  )
}

export  default  Icon;