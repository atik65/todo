import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import propTypes from "prop-types";

export default class SearchCreate extends Component {
  render() {
    const { handleSearch, searchTerm, toggleForm } = this.props;
    return (
      <>
        <div className="d-flex mb-1">
          <Input
            type="text"
            onChange={handleSearch}
            placeholder="Search your requirement"
            value={searchTerm}
          ></Input>
          <Button className="ms-2" color="success" onClick={toggleForm}>
            New{" "}
          </Button>
        </div>
      </>
    );
  }
}

SearchCreate.propTypes = {
  handleSearch: propTypes.func.isRequired,
  searchTerm: propTypes.string.isRequired,
  toggleForm: propTypes.func.isRequired,
};
