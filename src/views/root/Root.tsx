import React from 'react';
import Button from '../../components/Button/Button';

function Root() {
  return (
    <>
      <Button secondary>Close/Save</Button>
      <Button secondary={false}>Close/Save</Button>
    </>
  );
}

export default Root;
