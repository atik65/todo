import React, { Component } from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import propTypes from "prop-types";

export default class CreateTodoForm extends Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
            <Label>Enter Task:</Label>
            <Input
              className="my-1"
              name="text"
              placeholder="Enter your Task Intro"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Describe Task:</Label>
            <Input
              className="my-1"
              type="textarea"
              name="description"
              value={this.state.description}
              placeholder="Enter some text about your task"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button className="my-2" type="submit" color="success">
            Create ToDo
          </Button>
        </Form>
      </>
    );
  }
}

CreateTodoForm.propTypes = {
  submitForm: propTypes.func.isRequired,
};
