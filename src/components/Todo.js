import React from 'react';


function Todo({todo}) {
  return (
    <div className="rush">
        <label>
            <input type="checkbox" checked={todo.complete}/>
            {todo.name}
        </label>
    </div>
  );
}


export default Todo;