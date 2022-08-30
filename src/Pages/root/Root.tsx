import React from 'react';
import Button from '../../components/Atoms/Button/Button';
import { MainTemplate } from '../../templates/MainTemplate';

function Root() {
  return (
    <MainTemplate>
      <>
        <h1>Hello Mariusz</h1>
        <Button secondary>Close/Save</Button>
        <Button secondary={false}>Remove</Button>
      </>
    </MainTemplate>
  );
}

export default Root;
