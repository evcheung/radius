import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Label, StyledLabel, Textbox, Icons } from '../../../src';

storiesOf('Label', module)
  .add('Default', () => <Label>Field Label</Label>)
  .add('Mandatory', () => <Label required>Field Label</Label>)
  .add('Text Adornment', () => (
    <>
      <Label adornment="(optional)" mb={4}>
        Field Label
      </Label>
      <Label adornment="(more info)" required>
        Field Label
      </Label>
    </>
  ))
  .add('Flexible Adornment', () => (
    <Label adornment={<Icons.Info color="brand.primary" fontSize={2} />}>
      Field Label
    </Label>
  ));
