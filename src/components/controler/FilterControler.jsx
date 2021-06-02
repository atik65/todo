import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import propTypes from "prop-types";

const FilterControler = ({ handleFilter, filter }) => {
  return (
    <ButtonGroup>
      <Button
        color={filter === "all" ? "info" : "secondary"}
        onClick={() => handleFilter("all")}
      >
        All
      </Button>
      <Button
        color={filter === "completed" ? "info" : "secondary"}
        onClick={() => handleFilter("completed")}
      >
        Completed
      </Button>
      <Button
        color={filter === "running" ? "info" : "secondary"}
        onClick={() => handleFilter("running")}
      >
        Running
      </Button>
    </ButtonGroup>
  );
};

FilterControler.propTypes = {
  handleFilter: propTypes.func.isRequired,
};

export default FilterControler;
