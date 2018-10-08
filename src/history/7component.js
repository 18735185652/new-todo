import React,{Component} from 'react';
import {render} from 'react-dom';

//计时器 Clock
//函数方式生命的组件是静态的，是不能动的
// let Clock = () => {
//     return <h1>{new Date().toLocaleString()}</h1>
// }
// setInterval(function(){
    // render(<Clock/>,window.app);
// },1000)



//通过类来声明组件 类需要继承自Component
class Clock extends Component{
    constructor(){
        super();
        //自定义组件状态对象
        this.state = {time:new Date().toLocaleString()}
    }
//声明周期函数 组件挂载完成
    componentDidMount(){
        //每秒会重新修改状态，当调用setState之后，状态会更新，还会再次调用render方法重新渲染
        window.setInterval(()=>{
            this.setState({time:new Date().toLocaleString()})
        },1000)
    }
// render方法值得是该组件将要如何渲染,一定要返回一个React元素，而且只能返回一个React元素
    render() {
        return <h1>{this.state.time}</h1>;
    }
}

render(<Clock/>,window.app);



