import React from 'react';
import { getByText, render } from '@testing-library/react';

import apps from '../../Assets/icons/apps.svg';
import { renderWithProvider } from '../../Utils/renderWithProvider';
import { AddCategory } from './AddCategory';

describe('Testing button', () => {
  it('should renders the component', function () {
    renderWithProvider(<AddCategory />);
  });
});
