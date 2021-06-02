import React from "react";
import SearchCreate from "./SearchCreate";
import propTypes from "prop-types";
import FilterController from "./FilterController";
import ViewController from "./ViewController";
import BulkController from "./BulkController";
import { Row, Col } from "reactstrap";

const Controller = ({
  handleSearch,
  searchTerm,
  toggleForm,
  handleFilter,
  handleView,
  view,
  colorBulk,
  handleCompleted,
  handleSelected,
  reset,
  filterColor,
}) => {
  return (
    <>
      <SearchCreate
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        toggleForm={toggleForm}
      />

      <Row>
        <Col md={{ size: 4 }}>
          <FilterController
            handleFilter={handleFilter}
            filterColor={filterColor}
          />
        </Col>
        <Col md={{ size: 4 }}>
          {" "}
          <ViewController handleView={handleView} view={view} />{" "}
        </Col>
        <Col md={{ size: 4 }} className="ms-auto">
          <BulkController
            colorBulk={colorBulk}
            handleSelected={handleSelected}
            handleCompleted={handleCompleted}
            reset={reset}
          />
        </Col>
      </Row>
    </>
  );
};

Controller.propTypes = {
  handleSearch: propTypes.func.isRequired,
  searchTerm: propTypes.string.isRequired,
  toggleForm: propTypes.func.isRequired,
  view: propTypes.string.isRequired,
  filterColor: propTypes.string.isRequired,
  colorBulk: propTypes.string.isRequired,
  handleFilter: propTypes.func.isRequired,
  handleView: propTypes.func.isRequired,
  handleSelected: propTypes.func.isRequired,
  handleCompleted: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
};

export default Controller;
