import React from 'react';
import './AddTodo.scss';
import {connect} from 'react-redux';

import {addTodo}  from '../store/actions'


 class AddTodo extends React.Component {
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
            <div className="AddTodo">
                <input
                    type="text"
                    placeholder="añade nueva tarea"
                    value={this.state.newTodoText}
                    onChange={this.handleChange}
                    onKeyPress={this.onKeyPress}
                />
            </div>
        )
    }
}

export default connect(null, dispatch => ({ onNewTodo: addTodo(dispatch)})   )(AddTodo)