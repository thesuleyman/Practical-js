var todoList = {
todos: ['item1','item2','item3'],
sayName: function(){
console.log(this.todos);
}
};
todoList.sayName();