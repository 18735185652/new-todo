import React from 'react';
import ReactDOM from 'react-dom';

// 1.react是一个用户界面的库
// 2.react元素 JSX元素  其实就是一个用JS来描述界面的对象

ReactDOM.render(<div>
    <span>hellow</span>
</div>,document.querySelector("#root"));


ReactDOM.render(
    React.createElement('div',null,[React
    .createElement('span',null,['hellow'])]),
    document.querySelector("#root")
)