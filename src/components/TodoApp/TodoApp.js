import React, { Component } from 'react'
import './TodoApp.css'

export default class TodoApp extends Component {
    state = {
        input: '',
        items: []
    }
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    storeItems = (e) => {
        e.preventDefault();
        const { input } = this.state;

        this.setState({
            items: [...this.state.items, input],
            input: ''
        })
    }

    deleteItem = (index) => {
        this.setState({
            items: this.state.items.filter((data, key) => key !== index)
        })
    }

    editItem = (index)=>{
        let wish = prompt('Edit your wish!',this.state.items.filter((data,key)=>key === index))

        if(wish != null){
            this.setState({
                items: [...this.state.items,this.state.items[index] = wish]
            })
        }else{
            
        }
    }

    render() {
        const { input, items } = this.state;
        console.log(items);
        return (
            <div className='todo-container'>
                <form className='input-section' onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input type="text" onChange={this.handleChange} value={input} placeholder='Enter your wish' />
                </form>
                <ul>
                    {items.map((data, index) => (
                        <li key={index}>{data}<i className="fas fa-edit" onClick={() => this.editItem(index)}></i><i className='fas fa-trash-alt' onClick={() => this.deleteItem(index)}></i></li>
                    ))}
                </ul>
            </div>
        )
    }
}
