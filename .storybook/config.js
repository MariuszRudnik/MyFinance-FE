import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

function loadStories() {
  require('../src/components');
}


addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
configure(loadStories, module);
