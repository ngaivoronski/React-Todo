// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {useEffect} from 'react';
import ToDoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
        toDoList: [],
        searchInput: "",
        searchResults: [],
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

    updateSearch = event => {
        this.setState({
            searchInput: event.target.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.state.searchInput != prevState.searchInput || this.state.toDoList != prevState.toDoList) {
            var results = this.state.toDoList.filter(item => item.task.toLowerCase().includes(this.state.searchInput.toLowerCase()));
            this.setState({
                searchResults: results,
            })
        }
        // console.log(this.state.searchResults);
        console.log(results);
    }
    
    render() {
        return (
            <div>
                <ToDoForm addToDo={this.addToDo}/>
                <label htmlFor="search">Search:</label>
                <input 
                type="text"
                name="search"
                id="search"
                value={this.state.searchInput}
                onChange={this.updateSearch}
                />
                <div className="todo-list">
                    {this.state.searchResults.map(item => (
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