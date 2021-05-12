import React, { Component } from 'react'
import './TodoApp.css'

export default class TodoApp extends Component {
    render() {
        return (
            <div className='todo-container'>
                <h1>Todo App</h1>
                <div className='input-section'>
                    <input type="text" name="" id="" />
                    <button>Add</button>
                </div>
                <ul>
                    <li>Items</li>
                </ul>
            </div>
        )
    }
}
