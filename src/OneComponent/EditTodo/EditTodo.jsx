import React, { useEffect, useState } from "react";
import { Input, Button, Form, FormGroup } from "reactstrap";
import propTypes from "prop-types";

const EditTodo = ({ toggleUpdate, submitEditForm, id, text, description }) => {
  const [state, setState] = useState({
    text: "",
    description: "",
  });

  useEffect(() => {
    setState({
      text: text,
      description: description,
    });
  }, [id]);

  const handleChange = (event) => {
    setState(() => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEditForm(state);
    setState({
      text: "",
      description: "",
    });
    toggleUpdate();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="text"
            placeholder="Enter ToDo Title"
            onChange={handleChange}
            value={state.text}
          />
        </FormGroup>

        <FormGroup>
          <Input
            className="my-2"
            type="textarea"
            name="description"
            placeholder="Enter ToDo description"
            value={state.description}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="success" type="submit">
          Update ToDo
        </Button>
      </Form>
    </div>
  );
};

EditTodo.propTypes = {
  submitEditForm: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  text: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  toggleUpdate: propTypes.func.isRequired,
};

export default EditTodo;
