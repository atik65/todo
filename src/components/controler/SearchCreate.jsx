import React from "react";
import { Input, Button } from "reactstrap";
import propTypes from "prop-types";

const SearchCreate = (props) => {
  const { searchTerm, handleSearch, toggleForm } = props;
  return (
    <>
      <div className="d-flex">
        <Input
          className="me-2"
          placeholder="Search Items"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button color="success" onClick={toggleForm}>
          New
        </Button>
      </div>
    </>
  );
};

SearchCreate.propTypes = {
  searchTerm: propTypes.string.isRequired,
  handleSearch: propTypes.func.isRequired,
  toggleForm: propTypes.func.isRequired,
};

export default SearchCreate;
