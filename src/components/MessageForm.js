import React,{Component} from 'react';
export default class MessageForm extends Component{
    handleSubmit = (event)=>{
        event.preventDefault();
        /* 获得用户名的值 */
        let username = this.username.value;
        
        /* 获取内容的值 */
        let content = this.content.value;
        console.log(username,content)
        this.props.addMessage({username,content,createAt:new Date()})
    }
    render(){
        return (
            <form  className="list-group" onSubmit={this.handleSubmit}>
                <div className='from-group'>
                    <label htmlFor='username'  className='control-label'>用户名</label>
                    <input type='text' className='from-control' ref={x=>this.username=x}/>   
                </div>
                
                <div className='from-group'>
                    <label htmlFor='content' className='control-label'>内容</label>
                    <input type='text' ref={x=>this.content=x} className='from-control'/>   
                </div>

                <div className='from-group'>
                    <button className='btn btn-primary'>发表</button>
                </div>
            </form>
        )
    }
}
