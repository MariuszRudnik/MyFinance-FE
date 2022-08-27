import React from 'react';
import Button from '../../components/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';

function Root() {
  return (
    <>
      <GlobalStyle />
      <Button secondary>Close/Save</Button>
      <Button secondary={false} width="150px">
        Close/Save
      </Button>
    </>
  );
}

export default Root;
