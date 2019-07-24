import React from 'react';
import TodoItem from './Todo'
const TodoList = ({items, onClick}) =>(
    
  items.length >0 && items.map((item, index)=>{
       return (
           <ul>
               <TodoItem item={item} index={index} onClick={(e)=>onClick(item.id,e)}/>
           </ul>
       );
   })
)

export default TodoList;