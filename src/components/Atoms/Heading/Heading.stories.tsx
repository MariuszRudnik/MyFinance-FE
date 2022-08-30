import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>Mariusz</Heading>)
  .add('big', () => <Heading big>Mariusz</Heading>);
