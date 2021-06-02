import React from "react";
import { Table, CustomInput, Button } from "reactstrap";
import propTypes from "prop-types";

const TableRow = ({ todo, toggleSelect, toggleComplete, toggleEdit }) => {
  return (
    <>
      <tr className="text-center">
        <td>
          <CustomInput
            id={todo.id}
            type="checkbox"
            onChange={() => toggleSelect(todo.id)}
            checked={todo.isChecked}
          />
        </td>
        <td>{todo.text}</td>
        <td>{todo.description}</td>
        <td>{todo.time.toDateString()}</td>
        <td>
          <Button color="danger" onClick={() => toggleEdit(todo.id)}>
            Edit
          </Button>
        </td>
        <td>
          <Button
            color={todo.isCompleted ? "danger" : "success"}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.isCompleted ? "Completed" : "Running"}
          </Button>
        </td>
      </tr>
    </>
  );
};

TableRow.propTypes = {
  todo: propTypes.object.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleEdit: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleEdit, toggleComplete }) => {
  return (
    <Table>
      <thead className="text-center">
        <tr>
          <td>#</td>
          <td>Title</td>
          <td>Description</td>
          <td>Date</td>
          <td>Edit Button</td>
          <td>Complete Button</td>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TableRow
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleEdit={toggleEdit}
            toggleSelect={toggleSelect}
          />
        ))}
      </tbody>
    </Table>
  );
};

TableView.propTypes = {
  todos: propTypes.array.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleEdit: propTypes.func.isRequired,
};

export default TableView;
