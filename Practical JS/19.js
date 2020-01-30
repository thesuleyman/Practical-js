var todosList={
todos:[],
displayTodos: function(){
	console.log('Mytodos', this.todos);
},


addTodo: function(todoText){
	this.todos.push({
todoText:todoText,
completed:false
	});

	this.displayTodos();
},
changeTodo:function(position, todoText){
this.todos[position].todoText=todoText;
this.displayTodos();
 }, 
deleteTodo:function(position){
this.todos.splice(position, 1);
this.displayTodos();
},
toggleCompleted: function(position){
var todo=this.todos[position];
todos.completed=!todo.completed;
this.displayTodos();

}
};
todosList.addTodo('boolean testing');
todosList.changeTodo(0);