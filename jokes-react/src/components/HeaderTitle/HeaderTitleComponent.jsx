import PropTypes from "prop-types";
import React from "react";


const HeaderTitleComponent = ({ title }) => {
  return (
    <div className="main-page-title-div">
      <h1 className="main-page-title">{title}</h1>
    </div>
  );
};

HeaderTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderTitleComponent;
