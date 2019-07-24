import React from 'react';
//A single item/todo , using ES6 destructuring
const TodoItem = ({item, onClick}) => (
    <li style={{textDecoration:item.done ? 'line-through':'none', cursor:"pointer"}} onClick={onClick}>{item.text}</li>
)
export default TodoItem;