import React from 'react'
const ENTRY_KEY = 13;
export default class TodoHeader extends React.Component{
    handleKeyDown=(event)=>{
        if(event.keyCode===ENTRY_KEY&&event.target.value.length!=null&&event.target.value.length>0){
            let title = event.target.value;
            this.props.addTodo({title});
            event.target.value = '' 
        }
    }
    render(){
        return (
            <div className='form-group'>
                <input type='text' onKeyDown={this.handleKeyDown} autoFocus={true} className='form-control'/>
            </div>
        )
    }
} 