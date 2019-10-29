import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: "",
        }
    }

    handleChanges = event => {
        this.setState({
            newTodo: event.target.value
        });
    };

    handleSubmit = event => {
        console.log("fires");
        event.preventDefault();
        this.props.addToDo(this.state.newTodo);
        this.setState({ newTodo: "" });
    }

    enterSubmit = event => {
        if (event && event.keyCode == 13) {
            this.handleSubmit();
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="item"/>
                <input
                type="text"
                name="item"
                id="item"
                value={this.state.newTodo}
                onChange={this.handleChanges}
                onKeyPress={this.enterSubmit}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;