import React, { Component } from "react";
import { Input, Button, Form, FormGroup } from "reactstrap";
import propTypes from "prop-types";

export default class CreateTodo extends Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({
      text: "",
      description: "",
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="text"
              placeholder="Enter ToDo Title"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </FormGroup>

          <FormGroup>
            <Input
              className="my-2"
              type="textarea"
              name="description"
              placeholder="Enter ToDo description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="success" type="submit">
            Create ToDo
          </Button>
        </Form>
      </>
    );
  }
}

CreateTodo.propTypes = {
  submitForm: propTypes.func.isRequired,
};
