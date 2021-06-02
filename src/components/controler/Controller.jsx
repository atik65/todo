import React from "react";
import SearchCreate from "../controler/SearchCreate";
import propTypes from "prop-types";
import ViewControler from "./ViewControler";
import FilterControler from "./FilterControler";
import BulkControler from "./BulkControler";
import { Row, Col } from "reactstrap";

const Controller = ({
  searchTerm,
  view,
  handleSearch,
  toggleForm,
  handleFilter,
  handleView,
  clearSelected,
  clearCompleted,
  reset,
  state,
}) => {
  return (
    <>
      <SearchCreate
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />

      <Row className="my-2">
        <Col md={{ size: 4 }}>
          <FilterControler handleFilter={handleFilter} filter={state.filter} />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewControler view={view} handleView={handleView} />
        </Col>
        <Col md={{ size: 4 }}>
          <BulkControler
            color={state.color}
            clearSelected={clearSelected}
            clearCompleted={clearCompleted}
            reset={reset}
          />
        </Col>
      </Row>
    </>
  );
};

Controller.propTypes = {
  searchTerm: propTypes.string.isRequired,
  view: propTypes.string.isRequired,
  handleSearch: propTypes.func.isRequired,
  toggleForm: propTypes.func.isRequired,
  handleFilter: propTypes.func.isRequired,
  handleView: propTypes.func.isRequired,
  clearSelected: propTypes.func.isRequired,
  clearCompleted: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
  state: propTypes.object.isRequired,
};
export default Controller;
