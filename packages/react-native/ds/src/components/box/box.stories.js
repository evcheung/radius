import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme, Box, Textbox, Heading } from '../../../src';

storiesOf('Box', module).add('Default', () => (
  <Box>
    <Box bg="text.primary" p={3} mb={2}>
      <Textbox variant="body" color="text.inverse">
        This is a box
      </Textbox>
    </Box>
    <Box bg="text.primary" p={3}>
      <Textbox variant="body" color="text.inverse">
        This is a box
      </Textbox>
    </Box>
  </Box>
));
