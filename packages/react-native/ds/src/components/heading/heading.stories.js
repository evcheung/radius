import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme, Box, Textbox, Heading, Flex } from '../../../src';

export const Variant = props => (
  <Textbox
    variant="hint"
    fontSize={1}
    color="text.secondary"
    width={3}
    mr={2}
    my={0}
    {...props}
  />
);

storiesOf('Heading', module).add('Default', () => (
  <Box>
    <Flex alignItems="baseline" mb={3}>
      <Variant>heading-1 </Variant>
      <Heading variant="heading-1">You know nothing, Jon Snow</Heading>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>heading-2 </Variant>
      <Heading variant="heading-2">You know nothing, Jon Snow</Heading>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>heading-3 </Variant>
      <Heading variant="heading-3">You know nothing, Jon Snow</Heading>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>heading-4 </Variant>
      <Heading variant="heading-4">You know nothing, Jon Snow</Heading>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>heading-5 </Variant>
      <Heading variant="heading-5">You know nothing, Jon Snow</Heading>
    </Flex>
  </Box>
));
