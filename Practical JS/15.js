var todoList = {
todos: [],
sayName: function(){
console.log(this.todos);
},
addTodo:function(todo){
this.todos.push({
todo:todo,
completed:false
});

this.sayName();
},

changeTodo: function(position, newvalue){
this.todos[position]= newvalue;
this.sayName();
},
deleteTodo:function(position){
this.todos.splice(position, 1);
this.sayName();
}
};

todoList.addTodo('this is an object');