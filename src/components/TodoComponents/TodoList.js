// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
        toDoList: [],
        }
    }

    addToDo = todo => {
        const newToDo = {
            task: todo,
            id: Date.now(),
            completed: false,
        };
        this.setState({
            toDoList: [...this.state.toDoList, newToDo]
        });
    }
    
    clearCompleted = () => {
        this.setState({
            toDoList: this.state.toDoList.filter(item => item.completed === false)
        })
    }

    toggleComplete = id => {
        this.setState({
            toDoList: this.state.toDoList.map(item => {
                if (item.id === id) {
                    return {
                        ...item, completed: !item.completed
                    };
                }
                else {
                    return item;
                }
            })
        });
    };
    
    render() {
        return (
            <div>
                <ToDoForm addToDo={this.addToDo}/>
                <div className="todo-list">
                    {this.state.toDoList.map(item => (
                        <Todo
                        task={item.task}
                        id={item.id}
                        completed={item.completed}
                        toggleComplete={this.toggleComplete}
                        />
                    ))}
                    <button className="clear-btn" onClick={this.clearCompleted}>
                    Clear Completed
                    </button>
                </div>
            </div>
            
        );
    }
}

export default TodoList;