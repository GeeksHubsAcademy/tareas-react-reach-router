
import React from 'react'
import './TodosList.scss'


class TodosList extends React.Component {
    state = {
        newTodoText: ''
    }

    handleChange = (event) => {
        this.setState({ newTodoText: event.target.value });
    }
    onKeyPress = (event) => {
        if (event.charCode === 13) {

            this.props.onNewTodo(event.target.value)
            this.setState({ newTodoText: '' });
        }
    }


    render() {

        return (
            <div className="TodosList">
                <div className="addTodo">
                    <h1>new text: {this.state.newTodoText}</h1>
                    <input
                        type="text"
                        placeholder="añade nueva tarea"
                        value={this.state.newTodoText}
                        onChange={this.handleChange}
                        onKeyPress={this.onKeyPress}
                    />
                </div>
                <div className="allTodos">
                    {this.props.todos.map(todo => (
                        <div key={todo.id}   className={`todo ${todo.completed ? 'completed' : ''}`}>
                            <span className="text">{todo.text}</span>
                            <div className="action">
                                <button onClick={() => this.props.onCompleted(todo.id)}> {todo.completed ? '✅' : '✔'}</button>
                                <button> ✏ </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )



    }
}




export default TodosList;