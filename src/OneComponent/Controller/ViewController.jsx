import React from "react";
import { CustomInput } from "reactstrap";
import propTypes from "prop-types";

const ViewController = ({ handleView, view }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <CustomInput
          type="radio"
          value="list"
          id="view"
          onChange={handleView}
          className="me-2"
          name="view"
          checked={view === "list"}
        />{" "}
        List view
        <CustomInput
          name="view"
          type="radio"
          value="table"
          id="view"
          checked={view === "table"}
          className="ms-3 me-2"
          onChange={handleView}
        />{" "}
        Table view
      </div>
    </>
  );
};

ViewController.propTypes = {
  handleView: propTypes.func.isRequired,
  view: propTypes.string.isRequired,
};

export default ViewController;
