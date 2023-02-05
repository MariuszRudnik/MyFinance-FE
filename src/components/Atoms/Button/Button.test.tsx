import React from 'react';
import { getByText, render } from '@testing-library/react';
import Button from './Button';

describe('Testing button', () => {
  it('should renders the component', function () {
    render(<Button secondary={true}>Click Me</Button>).getByText('Click Me');
  });
});
