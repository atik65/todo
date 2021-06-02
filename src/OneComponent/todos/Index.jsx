import React, { Component } from "react";
import shortId from "shortid";
import ListView from "../ListView/ListView";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Modal, ModalHeader, ModalBody } from "reactstrap";
import TableView from "../TableView/TableView";
import Controller from "../Controller/Controller";
import CreateTodo from "../CreateTodo/CreateTodo";
import EditTodo from "../EditTodo/EditTodo";

// second attempt
export default class Index extends Component {
  state = {
    todos: [
      {
        id: shortId.generate(),
        text: "Todo title one",
        description: "first description",
        time: new Date(),
        isChecked: false,
        isCompleted: false,
      },
      {
        id: shortId.generate(),
        text: "Todo title two",
        description: "second description",
        time: new Date(),
        isChecked: false,
        isCompleted: false,
      },
    ],
    searchTerm: "",
    isOpenTodoCreate: false,
    view: "list",
    filterColor: "",
    colorBulk: "",
    filter: "all",
    editTodoId: "",
    editText: "",
    editDes: "",
    isOpenTodoUpdate: false,
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isCompleted = !todo.isCompleted;
    this.setState({ todos });
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isChecked = !todo.isChecked;
    this.setState({ todos });
  };

  toggleEdit = (todoId) => {
    const todos = this.state.todos.filter((todo) => todo.id !== todoId);
    const todo = this.state.todos.find((todo) => todo.id === todoId);
    this.setState({
      editTodoId: todoId,
      editText: todo.text,
      editDes: todo.description,
      todos,
    });
    this.toggleUpdate();
  };

  submitEditForm = (todo) => {
    todo.id = Number(new Date());
    todo.time = new Date();
    todo.isChecked = false;
    todo.isCompleted = false;

    const todos = [todo, ...this.state.todos];
    this.setState({
      todos,
    });
  };

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  performSearch = () => {
    return this.state.todos.filter(
      (todo) =>
        todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        todo.description
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        todo.time
          .toDateString()
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
    );
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoCreate: !this.state.isOpenTodoCreate,
    });
  };

  submitForm = (todo) => {
    todo.id = shortId.generate();
    todo.time = new Date();
    todo.isChecked = false;
    todo.isCompleted = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos: todos });
    this.toggleForm();
  };

  handleFilter = (filter) => {
    this.setState({
      filter: filter,
      filterColor: filter,
    });
  };

  handleView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };

  performFilter = (todos) => {
    const { filter } = this.state;

    if (filter === "completed") {
      return todos.filter((todo) => todo.isCompleted);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isCompleted);
    } else {
      return todos;
    }
  };

  toggleUpdate = () => {
    this.setState({
      isOpenTodoUpdate: !this.state.isOpenTodoUpdate,
    });
  };

  changeView = () => {
    const { view } = this.state;
    let todos = this.performSearch();
    todos = this.performFilter(todos);

    if (view === "list") {
      return (
        <Container>
          <ListView
            todos={todos}
            toggleEdit={this.toggleEdit}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        </Container>
      );
    } else if (view === "table") {
      return (
        <Container>
          <TableView
            todos={todos}
            toggleSelect={this.toggleSelect}
            toggleEdit={this.toggleEdit}
            toggleComplete={this.toggleComplete}
          />
        </Container>
      );
    }
  };

  handleSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isChecked);

    this.setState({
      todos: todos,
      colorBulk: "selected",
    });
  };

  handleCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isCompleted);

    this.setState({
      todos,
      colorBulk: "completed",
    });
  };

  reset = () => {
    this.setState({
      searchTerm: "",
      isOpenTodoCreate: false,
      view: "list",
      filterColor: "",
      colorBulk: "",
      filter: "all",
    });
  };

  render() {
    return (
      <>
        <Container>
          <p className="display-4 text-center my-3">Atik's Todo App</p>
        </Container>
        <Container className="mb-1">
          <Controller
            handleSearch={this.handleSearch}
            searchTerm={this.state.searchTerm}
            toggleForm={this.toggleForm}
            view={this.state.view}
            filterColor={this.state.filterColor}
            colorBulk={this.state.colorBulk}
            handleFilter={this.handleFilter}
            handleView={this.handleView}
            handleSelected={this.handleSelected}
            handleCompleted={this.handleCompleted}
            reset={this.reset}
          />
        </Container>
        {this.changeView()}
        <Modal isOpen={this.state.isOpenTodoCreate} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>Add New Todo</ModalHeader>
          <ModalBody>
            <CreateTodo submitForm={this.submitForm} />
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.isOpenTodoUpdate} toggle={this.toggleUpdate}>
          <ModalHeader toggle={this.toggleUpdate}>Edit ToDo</ModalHeader>
          <ModalBody>
            <EditTodo
              submitEditForm={this.submitEditForm}
              id={Number(this.state.editTodoId)}
              text={this.state.editText}
              description={this.state.editDes}
              toggleUpdate={this.toggleUpdate}
            />
          </ModalBody>
        </Modal>
      </>
    );
  }
}
