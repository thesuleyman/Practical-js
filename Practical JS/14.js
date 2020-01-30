var todoList = {
todos: ['item1','item2','item3'],
sayName: function(){
console.log(this.todos);
},
addTodo:function(todo){
this.todos.push(todo);
this.sayName();

},
changeTodo:function(position, newvalue){
this.todos[position]= newvalue;
this.sayName();
},
deleteTodo:function(position){
this.todos.splice(position, 1);
this.sayName();
}
};

todoList.sayName();
todoList.deleteTodo(1);