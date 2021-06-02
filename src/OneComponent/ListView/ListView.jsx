import React from "react";
import { ListGroupItem, CustomInput, Button, ListGroup } from "reactstrap";
import propTypes from "prop-types";

const ListItem = ({ todo, toggleSelect, toggleEdit, toggleComplete }) => {
  return (
    <>
      <ListGroupItem className="d-flex align-items-center">
        <CustomInput
          type="checkbox"
          id={todo.id}
          checked={todo.isChecked}
          onChange={() => toggleSelect(todo.id)}
        ></CustomInput>

        <div className="ms-3">
          <h3>{todo.text}</h3>
          <p>{todo.description}</p>
          <p>{todo.time.toDateString()}</p>
        </div>

        <Button
          className="ms-auto"
          onClick={() => toggleEdit(todo.id)}
          color="danger"
        >
          Edit
        </Button>

        <Button
          onClick={() => toggleComplete(todo.id)}
          className="ms-3"
          color={todo.isCompleted ? "danger" : "success"}
        >
          {todo.isCompleted ? "Completed" : "Running"}
        </Button>
      </ListGroupItem>
    </>
  );
};

ListItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleEdit: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

const ListView = ({ todos, toggleComplete, toggleEdit, toggleSelect }) => {
  return (
    <ListGroup>
      {todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleSelect={toggleSelect}
            toggleEdit={toggleEdit}
          />
        );
      })}
    </ListGroup>
  );
};

ListView.propTypes = {
  todos: propTypes.array.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleEdit: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
};

export default ListView;
