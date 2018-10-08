import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types'
class Person extends Component{
    //默认属性对象
    static defaultProps = {
        name:'无名'
    }
    //如果定义组件的时候希望传入组件的属性有类型和是否必填的限制
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number.isRequired
    }
    render(){
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <button>改变</button>
            </div>
        )
    }
}

render(<Person name='gaopeng' age={25}/>,window.app)



