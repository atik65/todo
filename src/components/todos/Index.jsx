import React, { Component } from "react";
import ListView from "../listview/Lisview";
import TableView from "../tableview/TableView";
import { Container } from "reactstrap";
import shortid from "shortid";
import CreateTodoForm from "../create-todo-form";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Controller from "../controler/Controller";
import EditTodo from "../EditTodo/EditTodo";

export default class Index extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: "Todo title one",
        description: "first description",
        time: new Date(),
        isChecked: false,
        isComplete: false,
      },
      {
        id: 2,
        text: "Todo title two",
        description: "second description",
        time: new Date(),
        isChecked: false,
        isComplete: false,
      },
    ],
    isOpen: false,
    searchTerm: "",
    view: "list",
    filter: "all",
    color: "",
    editedText: "",
    editedId: "",
    editedDes: "",
    isOpenForUpdate: false,
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({
      todos,
    });
  };

  handleEdit = (todoID) => {
    this.toggleUpdate();
    const todos = this.state.todos.filter((todo) => todo.id !== todoID);
    const todo = this.state.todos.find((todo) => todo.id === todoID);
    this.setState({
      todos: todos,
      editedText: todo.text,
      editedDes: todo.description,
      editedId: todo.id,
    });
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isChecked = !todo.isChecked;
    this.setState({ todos });
  };

  //submit from
  submitForm = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isChecked = false;
    todo.isComplete = false;

    const todos = [todo, ...this.state.todos];
    this.setState({
      todos: todos,
    });
    this.toggleForm();
  };

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  toggleForm = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handelFilter = (data) => {
    this.setState({ filter: data });
  };

  handleView = (e) => {
    this.setState({
      view: e.target.value,
    });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isChecked);
    this.setState({ todos: todos, color: "selected" });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos: todos, color: "completed" });
  };
  reset = () => {
    this.setState({
      isOpen: false,
      searchTerm: "",
      view: "list",
      filter: "all",
      color: "",
    });
  };

  perfromSearch = () => {
    return this.state.todos.filter(
      (todo) =>
        todo.text
          .toLocaleLowerCase()
          .includes(this.state.searchTerm.toLocaleLowerCase()) ||
        todo.description
          .toLocaleLowerCase()
          .includes(this.state.searchTerm.toLocaleLowerCase())
    );
  };

  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  editForm = (data) => {
    data.id = shortid.generate();
    data.time = new Date();
    data.isChecked = false;
    data.isComplete = false;

    const todos = [data, ...this.state.todos];
    this.setState({
      todos: todos,
    });

    this.toggleUpdate();
  };
  toggleUpdate = () => {
    this.setState({
      isOpenForUpdate: !this.state.isOpenForUpdate,
    });
  };

  changeView = () => {
    let todos = this.perfromSearch();
    todos = this.performFilter(todos);
    if (this.state.view === "list") {
      return (
        <Container>
          <ListView
            todos={todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
            handleEdit={this.handleEdit}
          />
        </Container>
      );
    } else {
      return (
        <Container className="mt-4">
          <TableView
            todos={todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
            handleEdit={this.handleEdit}
          />
        </Container>
      );
    }
  };

  render() {
    return (
      <>
        <Container className="d-flex justify-content-center my-2">
          <p className="display-4"> Atik's ToDo App</p>
        </Container>
        <Container className="my-2">
          <Controller
            searchTerm={this.state.searchTerm}
            view={this.state.view}
            handleSearch={this.handleSearch}
            toggleForm={this.toggleForm}
            handleFilter={this.handelFilter}
            handleView={this.handleView}
            clearSelected={this.clearSelected}
            clearCompleted={this.clearCompleted}
            reset={this.reset}
            state={this.state}
          />
        </Container>
        {this.changeView()}
        {/* Modal for add the new todo item */}
        <Modal isOpen={this.state.isOpen} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>Enter Your Task</ModalHeader>
          <ModalBody>
            <CreateTodoForm submitForm={this.submitForm} />
          </ModalBody>
        </Modal>
        {/* Modal for Edit the todo item */}
        <Modal isOpen={this.state.isOpenForUpdate} toggle={this.toggleUpdate}>
          <ModalHeader toggle={this.toggleUpdate}>
            <ModalBody>
              <EditTodo
                isOpen={this.state.isOpenForUpdate}
                editForm={this.editForm}
                text={this.state.editedText}
                description={this.state.editedDes}
                id={Number(this.state.editedId)}
              />
            </ModalBody>
          </ModalHeader>
        </Modal>
      </>
    );
  }
}
