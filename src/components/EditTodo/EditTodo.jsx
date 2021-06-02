import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import propTypes from "prop-types";

const EditTodo = (props) => {
  const [state, setState] = useState({
    text: "",
    description: "",
  });

  useEffect(() => {
    setState({
      text: props.text,
      description: props.description,
    });
  }, [props.id]);

  const handleChange = (event) => {
    setState(() => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editForm(state);
    setState({
      text: "",
      description: "",
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Edit Task:</Label>
          <Input
            className="my-1"
            name="text"
            placeholder="Edit Title"
            value={state.text}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Edit Description:</Label>
          <Input
            className="my-1"
            type="textarea"
            name="description"
            value={state.description}
            placeholder="Enter Your Edited text about your task"
            onChange={handleChange}
          />
        </FormGroup>
        <Button className="my-2" type="submit" color="success">
          Update ToDo
        </Button>
      </Form>
    </>
  );
};

EditTodo.propTypes = {
  editForm: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  isOpen: propTypes.bool.isRequired,
  id: propTypes.number.isRequired,
};

export default EditTodo;
