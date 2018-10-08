import React,{Component} from 'react';
import jsonp from 'jsonp';
export default class Suggest extends Component{
    constructor(){
        super();
        this.state = {
            words:[],
            index:-1 //当前选中的索引 
        };
    } 
    handleKeyDown = (event)=>{
        let code = event.keyCode;
        //当按下的是向上和向下箭头键的时候
        if(code === 38||code ===40){
            let index = this.state.index;
            if(code === 38){
                index--;
                if(index==-2){
                    index = this.state.words.length-1
                }
            }else if(code === 40){
                index++
                if(index == this.state.words.length){
                    index = -1;
                }
            }
            this.setState({index})
        }else if(code == 13){
            window.location.href = `http://www.baidu.com/s?wd=${event.target.value}`
        }
    }
    handleChange = (event)=>{
        let wd = event.target.value;

        //缓存用户输入的关键字
        this.wd = wd;

        jsonp(`http://www.baidu.com/su?wd=${wd}`,{
            param:'cb'
        },(err,data)=>{
            console.log(data);
            this.setState({words:data.s});
        })
    }
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <input type="text"  value={this.state.index==-1?this.wd||'':this.state.words[this.state.index]} className="form-control" onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        {
                                            this.state.words.map((word,index)=>(
                                                <li key={index}  className={"list-group-item "+(index=== this.state.index?'active':'')}>{word}</li>
                                            ))   
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}









