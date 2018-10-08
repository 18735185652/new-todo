import React from 'react'
import * as filterTypes from './filter-types'
export default class TodoFooter extends React.Component{
    render(){
       
        return (
            <div className='row'>
                {
                    this.props.activeTodoCount>0?<div className='col-xs-3'>还有{this.props.activeTodoCount}件代办事项</div> : null
                }
                
                <div className='col-xs-6 text-center'>
                    <button className={`btn ${this.props.filterType ===filterTypes.ALL?'btn-success':'btn-default'} btn-sm`} 
                            style={{marginLeft:'10px'}}
                            onClick={()=>this.props.changeFilterType(filterTypes.ALL)}
                            >全部</button>
                    <button 
                            className={`btn ${this.props.filterType ===filterTypes.ACTIVE?'btn-success':'btn-default'} btn-sm`} 
                            style={{marginLeft:'10px'}}
                            onClick={()=>this.props.changeFilterType(filterTypes.ACTIVE)}
                            >未完成</button>
                    <button 
                            className={`btn ${this.props.filterType ===filterTypes.COMPLETED?'btn-success':'btn-default'} btn-sm`}
                            style={{marginLeft:'10px'}}
                            onClick={()=>this.props.changeFilterType(filterTypes.COMPLETED)}
                            >已完成</button>
                </div>
                <div className='col-xs-3'>
                    {
                        this.props.completedTodoCount>0?<button className='btn btn-danger btn-sm' onClick={this.props.clearCompleted}>删除已完成
                        </button>:null
                    }
                </div>
            </div>
        )
    }
} 