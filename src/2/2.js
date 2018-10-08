import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

/* 复合组件 */
/* 数据只能从父级组件传给子级组件 */
class Panel extends Component{
    render(){
        return (
            <div className="panel panel-default">
                <PanelHead head={this.props.head}/>
                <PanelBody body={this.props.body}/>
                <PanelFooter footer={this.props.footer}/>
            </div>
        )
    }
}
class PanelHead extends Component{
    render(){
        return <div className="panel-heading">{this.props.head}</div>
    }
}
class PanelBody extends Component{
    render(){
        return <div className="panel-body">{this.props.body}</div>
    }
}
class PanelFooter extends Component{
    render(){
        return <div className="panel-footer">{this.props.footer}</div>
    }
}




render(<Panel head="头部" body="体" footer="尾"/>,window.app)



