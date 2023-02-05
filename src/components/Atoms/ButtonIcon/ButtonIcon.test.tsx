import React from 'react';
import { getByText, render } from '@testing-library/react';
import CircleIcon from './CircleIcon';
import apps from '../../Assets/icons/apps.svg';
import { renderWithProvider } from '../../Utils/renderWithProvider';

describe('Testing button', () => {
  it('should renders the component', function () {
    renderWithProvider(<CircleIcon icon={apps} color="white" />);
  });
});
