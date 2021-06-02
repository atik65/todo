import React from "react";
import propTypes from "prop-types";
import { ListGroup, ListGroupItem, CustomInput, Button } from "reactstrap";

//List Item Component
const ListItem = ({ todo, toggleSelect, toggleComplete, handleEdit }) => {
  return (
    <ListGroupItem className="d-flex">
      <CustomInput
        className="ms-2 me-3"
        type="checkbox"
        id={todo.id}
        checked={todo.isChecked}
        onChange={() => toggleSelect(todo.id)}
      ></CustomInput>

      <div className="mx-5">
        <h5>{todo.text}</h5>
        <p>{todo.description}</p>
        <p> {todo.time.toDateString()} </p>
      </div>

      <Button
        className="ms-auto"
        color="danger"
        onClick={() => handleEdit(todo.id)}
      >
        Edit
      </Button>

      <Button
        className="ms-3"
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired,
  handleEdit: propTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete, handleEdit }) => {
  return (
    <ListGroup>
      {todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            todo={todo}
            handleEdit={handleEdit}
            toggleComplete={toggleComplete}
            toggleSelect={toggleSelect}
          />
        );
      })}
    </ListGroup>
  );
};

ListView.propTypes = {
  todos: propTypes.array.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
  handleEdit: propTypes.func.isRequired,
};

export default ListView;
