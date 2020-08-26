import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme, Box, Textbox, Flex } from '../../../src';

export const Variant = props => (
  <Textbox
    variant="hint"
    fontSize={1}
    color="text.secondary"
    width={3}
    my={0}
    {...props}
  />
);

storiesOf('Textbox', module).add('Default', () => (
  <Box>
    <Flex alignItems="baseline" mb={3}>
      <Variant>body</Variant>
      <Textbox variant="body">You know nothing, Jon Snow</Textbox>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>caption</Variant>
      <Textbox variant="caption">You know nothing, Jon Snow</Textbox>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>hint</Variant>
      <Textbox variant="hint">You know nothing, Jon Snow</Textbox>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>label</Variant>
      <Textbox variant="label">You know nothing, Jon Snow</Textbox>
    </Flex>
  </Box>
));
