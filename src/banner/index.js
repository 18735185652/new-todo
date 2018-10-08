import React from 'react';
import {render} from 'react-dom';
import Slider from './banner/Slider';
let IMAGE_DATA =[
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')} 
]
render(<Slider
    items={IMAGE_DATA}
    speed={1.2} /* 图片的播放速度 */
    delay={2.1} /* 多长时间轮播一次 */
    pause={true}/* 暂停，如果他为true，则当鼠标经过的时候自动停止轮播 */
    auto={true} /* 自动轮播 */
    dots={true}/* 显示小点导航 分页器 */
    arrows={true} /* 是否显示左右的箭头导航 */
/>,window.app)



