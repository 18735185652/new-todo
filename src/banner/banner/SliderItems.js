import React,{Component} from 'react';
export default class Message extends Component{
    render(){
        let style = {
            width:(this.props.items.length+1)*800,
            left:this.props.index* -800,
            transitionDuration:this.props.speed+'s' 
        }
        return (
            <ul className='sliders' style={style}>
            {
                this.props.items.map((item,index)=>(
                    <li className='slider' key={index}><img src={item.src}/></li>
                )) 
            }
            <li className='slider' key={this.props.items.length}><img src={this.props.items[0].src }/></li>
        </ul>
        )
    }
}