import React from 'react';
import './AddTodo.scss';
import {connect} from 'react-redux';

import {addTodo}  from '../store/actions'


 class AddTodo extends React.Component {
    state = {
        newTodoText: '',
        error:''
    }

    handleChange = (event) => {
        this.setState({ newTodoText: event.target.value });
    }
    onKeyPress = (event) => {
        if (event.charCode === 13) {
            let value = event.target.value;
            this.props.onNewTodo(value)
                .then(() => this.setState({ newTodoText: '', error:'' }))
                .catch(() => this.setState({ newTodoText: value, error: 'no se ha podido guardar' }))
            ;
        }
    }
    render() {
        return (
            <div className="AddTodo">
                <input
                    type="text"
                    placeholder="añade nueva tarea"
                    value={this.state.newTodoText}
                    onChange={this.handleChange}
                    onKeyPress={this.onKeyPress}
                />
                <div>
                    {this.state.error}
                </div>
            </div>
        )
    }
}

export default connect(null, dispatch => ({ onNewTodo: addTodo(dispatch)})   )(AddTodo)