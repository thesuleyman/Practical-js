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
}
};
todoList.changeTodo(0, 'first');