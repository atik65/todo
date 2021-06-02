import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import propTypes from "prop-types";

const FilterController = ({ handleFilter, filterColor }) => {
  return (
    <>
      <ButtonGroup>
        <Button
          color={filterColor === "all" ? "danger" : "success"}
          onClick={() => handleFilter("all")}
        >
          All
        </Button>
        <Button
          color={filterColor === "completed" ? "danger" : "success"}
          onClick={() => handleFilter("completed")}
        >
          Completed
        </Button>
        <Button
          color={filterColor === "running" ? "danger" : "success"}
          onClick={() => handleFilter("running")}
        >
          Running
        </Button>
      </ButtonGroup>
    </>
  );
};

FilterController.propTypes = {
  handleFilter: propTypes.func.isRequired,
  filterColor: propTypes.string.isRequired,
};

export default FilterController;
