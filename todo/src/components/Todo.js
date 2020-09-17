import React from 'react'

const Todo = (props) => {
    return (
        <div
            onClick={() => props.toggleTodo(props.todo["id"])}
            className={`todo${props.todo.completed ? " completed" : ""}`}
        >
            {console.log("Todo props", props)}
            <p>{props.todo.task}</p>
        </div>
    )
};

export default Todo;