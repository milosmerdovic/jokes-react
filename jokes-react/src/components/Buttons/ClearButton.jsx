import React from 'react'
import PropTypes from 'prop-types';
import Button from "@restart/ui/esm/Button";

const HeaderTitleComponent = ({ parentCallback, isDeletedFromDb }) => {

    const clear = () => {
        parentCallback(); // rendering a new value

        if(isDeletedFromDb) {
            // call the delete API from BE here
        }
    }

  return (
      <Button className='delete-button' onClick={clear}>
          Clear
      </Button>
  );
};

HeaderTitleComponent.propTypes = {
    isDeletedFromDb : PropTypes.bool
}

export default HeaderTitleComponent;