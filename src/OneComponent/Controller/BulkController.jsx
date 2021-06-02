import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import propTypes from "prop-types";

const BulkController = ({
  colorBulk,
  handleCompleted,
  handleSelected,
  reset,
}) => {
  return (
    <>
      <div>
        <ButtonGroup>
          <Button
            color={colorBulk === "completed" ? "danger" : "success"}
            onClick={handleCompleted}
          >
            Clear Completed
          </Button>

          <Button
            color={colorBulk === "selected" ? "danger" : "success"}
            onClick={handleSelected}
          >
            Clear Selected
          </Button>

          <Button
            color={colorBulk === "reset" ? "danger" : "success"}
            onClick={reset}
          >
            Reset
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

BulkController.propTypes = {
  colorBulk: propTypes.string.isRequired,
  handleCompleted: propTypes.func.isRequired,
  handleSelected: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
};

export default BulkController;
