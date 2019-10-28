import React from "react";

const Todo = props => {
    return (
        <div
            //className={`item${props.item.purchased ? " purchased" : ""}`}
            onClick={() => props.toggleComplete(props.id)}
        >
        <p>Task: {props.task}</p>
        <p>ID: {props.id}</p>
        <p>Completed: {props.completed ? "Completed" : "Open"}</p>
        </div>
    );
};

export default Todo;
