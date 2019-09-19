
import React from 'react'
import NotFound from './NotFound';
import './TodoDetail.scss'
class TodoDetail extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            ...this.props.todos.find(todo => todo.id === +this.props.id)
        }
    }
    handleChange = ({ target }) => {
        const value = target.name === 'completed' ? target.checked : target.value
        this.setState({ [target.name]: value })
    }
    submit = () => {
        this.props.onEditTodo(this.state);
        this.props.navigate('/');
    }

    render() {


        if (!this.state.id ) return <NotFound />
        return (
            <div className="TodoDetail">
                <h2>Editar la tarea {this.props.id}</h2>
                <input
                    type="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <label htmlFor="completed">
                    Completada:
                    <input
                        type="checkbox"
                        name="completed"
                        value={this.state.completed}
                        checked={this.state.completed}
                        onChange={this.handleChange}
                    />
                </label>

                <button  onClick={this.submit}>Guardar</button>
                <button onClick={() => this.props.navigate('/')}>Cancelar</button>
            </div>
        )
    }


}



export default TodoDetail;