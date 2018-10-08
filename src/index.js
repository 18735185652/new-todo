import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './todo/TodoApp';
import TodoModel from './todo/TodoModel';
let model = new TodoModel()
function render(){
    ReactDom.render(<TodoApp model={model}/>,document.querySelector('#root'));
}
model.subscribe(render);

render();
