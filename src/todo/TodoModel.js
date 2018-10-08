export default class TodoModel{
    constructor(){

        /* 向localStorage里面写入的时候需要这个key */
        this.STORE_KEY = 'todos';
        this.todos = localStorage.getItem(this.STORE_KEY)?
            JSON.parse(localStorage.getItem(this.STORE_KEY)):[]; /* 存放的所有的todos */
            /* 这里可以注册监听器，当模型数据发生变化之后会调用这些监听函数 */
            this.listeners = [] 
    }
   // 订阅 on(tyoe,listener)
   subscribe(listener){
      
       this.listeners.push(listener)
       console.log(this.listener)
   } 
   emit(){
    this.listeners.forEach(listener=>listener())
   }
   /* 保存并通知 */
   saveAndNotify(todos){
        localStorage.setItem(this.STORE_KEY,JSON.stringify(todos))
        this.todos =todos;
        this.emit();
    }
  /* 添加数据 */
    addTodo=(todo)=>{
        todo = Object.assign(todo,{id:Date.now(),completed:false},todo)
        let todos = this.todos; 
        todos.push(todo);
        this.saveAndNotify(todos);
    }
    toggle=(id)=>{ 
        let todos = this.todos;
        todos.map(todo=>{
            if(todo.id===id){
                todo.completed=!todo.completed;
            }
            return todo;
        })
        this.saveAndNotify(todos)
    }
    /* 移除一条数据 */
    remove=(id)=>{
        let todos = this.todos;
        let index=todos.findIndex(todo=>todo.id===id)
        todos.splice(index,1)
        this.saveAndNotify(todos)
    }
    /* 全选 取消全选 */
    toggleAll=(event)=>{
        let checked = event.target.checked;
        let todos = this.todos;
        todos.map((todo)=>(todo.completed=checked))
        this.saveAndNotify(todos)
    }

    clearCompleted=()=>{
        let todos = this.todos;
        /* completed状态 false是未完成 true已完成 */
        todos = todos.filter(todo=>!todo.completed)
        this.saveAndNotify(todos)
    }
  
}