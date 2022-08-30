import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button secondary={true}>Click Me</Button>)
  .add('Secondary', () => <Button secondary={false}>Click Me</Button>);
