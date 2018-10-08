import React from 'react';
import ReactDOM, {render} from 'react-dom';

// 组件的二种定义方式，以及他们之间的区别
// 1.组件定义的第一种方法是函数，参数是属性对象
// {msg:"hellow",id:"5"}
// 2.组件的首字母一定是大写
// 3.组件定义完后可以像React元素一样使用
// 组件的渲染过程
// 1. 封装props对象
    /* 转换过程
    let str = 'msg="hellow" id="5"'
    let queryString = require('querystring');
    let obj = queryString.parse(str,' ','=');
    console.log(obj) */
// 2.调用组件函数，得到返回的React元素  
// 3.ReactDom把React元素转换成真是的DOM元素并且插入到目标容器内 
let Message = (props) => {
    return <h1 style = {props.style}>{props.msg}</h1>
}
render(<Message msg = "hellow" id = "5" style = {{color:'red'}}/>,window.app);



