import Button from "@restart/ui/esm/Button";
import PropTypes from 'prop-types';
import React from 'react';

const ClearButtonComponent = ({ parentCallback, isDeletedFromDb=false }) => {

    const clear = () => {
        parentCallback(isDeletedFromDb); // rendering a new value
    }

  return (
      <Button className='delete-button' onClick={clear}>
          Clear
      </Button>
  );
};

ClearButtonComponent.propTypes = {
    isDeletedFromDb : PropTypes.bool,
    parentCallback : PropTypes.func.isRequired,
}

ClearButtonComponent.defaultProps = {
    isDeletedFromDb : false,
}

export default ClearButtonComponent;