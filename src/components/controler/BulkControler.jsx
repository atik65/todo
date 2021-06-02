import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import propTypes from "prop-types";

const BulkControler = ({ clearSelected, clearCompleted, reset, color }) => {
  return (
    <ButtonGroup>
      <Button
        color={color === "selected" ? "info" : "secondary"}
        onClick={clearSelected}
      >
        Clear Selected
      </Button>
      <Button
        color={color === "completed" ? "info" : "secondary"}
        onClick={clearCompleted}
      >
        Clear Completed
      </Button>
      <Button color={color === "reset" ? "info" : "secondary"} onClick={reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};

BulkControler.propTypes = {
  clearSelected: propTypes.func.isRequired,
  clearCompleted: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
};

export default BulkControler;
