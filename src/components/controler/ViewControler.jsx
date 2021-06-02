import React from "react";
import { Label, CustomInput } from "reactstrap";
import propTypes from "prop-types";

const ViewControler = ({ view, handleView }) => {
  return (
    <div className="d-flex">
      <Label for="list-view" className="me-2 d-flex">
        <CustomInput
          type="radio"
          name="view"
          value="list"
          id="list-view"
          checked={view === "list"}
          onChange={handleView}
          className="me-2"
        />{" "}
        List view
      </Label>

      <Label for="table-view" className="me-2 d-flex">
        <CustomInput
          type="radio"
          name="view"
          value="table"
          id="table-view"
          checked={view === "table"}
          onChange={handleView}
          className="me-2 ms-3"
        />{" "}
        Table view
      </Label>
    </div>
  );
};

ViewControler.propTypes = {
  view: propTypes.string.isRequired,
  handleView: propTypes.func.isRequired,
};
export default ViewControler;
