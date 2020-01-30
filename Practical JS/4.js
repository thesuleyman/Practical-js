var todos=['item1', 'item2', 'item3']

function change (position, newvalue){

todos[position]=newvalue;
console.log(todos);
}
change(0, 'chain')