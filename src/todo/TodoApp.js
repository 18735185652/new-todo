import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'
import * as filterTypes from './filter-types'
export default class TodoApp extends React.Component{
    constructor(){
        super();
        this.state = {
            // todos:[],
            filterType:filterTypes.ALL
        };//初始化默认状态
    }
    changeFilterType=(filterType)=>{
        this.setState({filterType}) 
    }
   
    render(){
        let todos = this.props.model.todos;
        let activeTodoCount = todos.reduce((count,todo)=>count+(todo.completed?0:1),0);
        let completedTodoCount = todos.length - activeTodoCount; 
        let showTodos = todos.filter((todo)=>{
            switch(this.state.filterType){
                case filterTypes.ACTIVE://显示未完成的
                    return !todo.completed;
                case filterTypes.COMPLETED://完成的
                    return todo.completed;
                default:
                    return true;    
            }
        })    
        let main =(
            <ul className='list-group'>
                {
                    todos.length>0?<li className='list-group-item'>
                    <input type='checkbox' checked={activeTodoCount===0} onChange={this.props.model.toggleAll}/>
                    {activeTodoCount===0?'全部取消':'全部选中'}
                </li>:null
                }
                {
                    showTodos.map((todo,index)=>(
                        <TodoItem key={index} todo={todo} toggle={this.props.model.toggle} remove={this.props.model.remove}/>
                    ))
                }
            </ul>
        ); 
        return (
            <div className='container' style={{marginTop:'20px'}}>
                <div className='row'>
                    <div className='col-md-6 col-md-offset-3'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>
                                <TodoHeader addTodo={this.props.model.addTodo}/>
                            </div>
                            <div className='panel-body'>
                                {main}
                            </div>
                            <div className='panel-footer'>
                                <TodoFooter 
                                    activeTodoCount={activeTodoCount} 
                                    changeFilterType={this.changeFilterType}
                                    filterType = {this.state.filterType}
                                    clearCompleted = {this.props.model.clearCompleted}
                                    completedTodoCount={completedTodoCount}
                                 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 