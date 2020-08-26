import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme, Box, Textbox, Flex } from '../../../src';

storiesOf('Flex', module).add('Default', () => (
  <Flex flexDirection="column" pb={4} pt={4}>
    <Box bg="text.primary" p={3} mb={2}>
      <Textbox variant="body" color="text.inverse">
        This is a flex box item
      </Textbox>
    </Box>
    <Box bg="text.primary" p={3}>
      <Textbox variant="body" color="text.inverse">
        This is a flex box item
      </Textbox>
    </Box>
  </Flex>
));
