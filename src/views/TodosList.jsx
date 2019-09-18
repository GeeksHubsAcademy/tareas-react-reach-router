import React from 'react'
import './TodosList.scss'


const TodosList = props => {

    return (
        <div className="TodosList">
            <div className="addTodo">
                <input type="text" placeholder="añade nueva tarea"/>
            </div>
            <div className="allTodos">
                {props.todos.map(todo => (
                    <div className={`todo ${todo.completed ? 'completed': ''}`}>
                        <span className="text">{todo.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )



}




export default TodosList;