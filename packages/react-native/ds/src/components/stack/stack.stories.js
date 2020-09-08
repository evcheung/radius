import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Box, Stack } from '../../../src';

storiesOf('Stack', module)
  .add('Horizontal', () => (
    <Stack bg="bg.secondary">
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
    </Stack>
  ))
  .add('Vertical', () => (
    <Stack bg="bg.secondary" axis="vertical">
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
    </Stack>
  ))
  .add('Control Spacing', () => (
    <Stack bg="bg.secondary" space={[4, 5, 6]}>
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
      <Box bg="ui.primary" width={3} height={3} />
    </Stack>
  ))
  .add('Control Alignment', () => (
    <Stack axis="vertical">
      <Stack bg="bg.secondary" alignment="start">
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
      </Stack>
      <Stack bg="bg.secondary" alignment="center">
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
      </Stack>
      <Stack bg="bg.secondary" alignment="end">
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
      </Stack>
    </Stack>
  ))
  .add('Control Distribution', () => (
    <Stack axis="vertical">
      <Stack bg="bg.secondary" distribution="start" height={3}>
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
      </Stack>
      <Stack bg="bg.secondary" distribution="center" height={3}>
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
      </Stack>
      <Stack bg="bg.secondary" distribution="end" height={3}>
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
        <Box bg="ui.primary" width={2} height={2} />
      </Stack>
    </Stack>
  ));
