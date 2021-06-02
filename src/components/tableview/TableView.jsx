import React from "react";
import { Button, CustomInput, Table } from "reactstrap";
import propTypes from "prop-types";

const RowItem = ({ todo, toggleSelect, toggleComplete, handleEdit }) => {
  return (
    <tr>
      <td>
        <CustomInput
          type="checkbox"
          id={todo.id}
          checked={todo.isChecked}
          onChange={() => toggleSelect(todo.id)}
        ></CustomInput>
      </td>
      <td>
        <h5>{todo.text}</h5>
      </td>
      <td>{todo.description}</td>
      <td>{todo.time.toDateString()}</td>
      <td>
        <Button color="danger" onClick={() => handleEdit(todo.id)}>
          Edit
        </Button>
      </td>
      <td>
        <Button
          onClick={() => toggleComplete(todo.id)}
          color={todo.isComplete ? "danger" : "success"}
        >
          {todo.isComplete ? "Compelted" : "Running"}
        </Button>
      </td>
    </tr>
  );
};

RowItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
  handleEdit: propTypes.func.isRequired,
};

const TableView = ({ todos, toggleComplete, toggleSelect, handleEdit }) => (
  <Table className="text-center">
    <thead>
      <tr>
        <th>#</th>
        <th>Text</th>
        <th>Description</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => {
        return (
          <RowItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
            handleEdit={handleEdit}
          />
        );
      })}
    </tbody>
  </Table>
);

TableView.propTypes = {
  todos: propTypes.array.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
  handleEdit: propTypes.func.isRequired,
};

export default TableView;
