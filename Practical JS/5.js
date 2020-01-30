var todos=['item1', 'item2', 'item3']

function deleteee (position){

todos.splice(position, 1);
console.log(todos);
}
deleteee(0)