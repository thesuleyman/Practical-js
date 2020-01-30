var todoList = {
todos: ['item1','item2','item3'],
sayName: function(){
console.log(this.todos);
},
addTodo:function(todo){
this.todos.push(todo);
this.sayName();

}

};
todoList.addTodo('plunker');