import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.todo.completed ? 'lightgreen' : 'rgb(182, 182, 182)',
            padding: '10px',
            border: '1px rgb(195, 195, 195) solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props.todo.title)
    // }

    render() {
        const { id, title, completed } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    {completed ? (
                        <input type='checkbox' defaultChecked onClick={this.props.markComplete.bind(this, id)}></input>
                    ) : (
                        <input type='checkbox' onClick={this.props.markComplete.bind(this, id)}></input>
                    )}
                    
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnDelete}>X</button>
                </p>
            </div>
        )
    }
}

// PorpTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnDelete = {
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    padding: '1px 3px',
    borderRadius: '50%',
    float: 'right'
}

export default TodoItem
