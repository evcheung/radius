import React from 'react';
import { TextInput } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { Box, Textbox, TextArea } from '../../../src';

storiesOf('Text Area', module)
  .add('Default', () => (
    <Box>
      <TextArea placeholder="Tell us your thoughts" maxCharacters={100} />
      <TextArea value="Very happy with the purchase" maxCharacters={100} />
    </Box>
  ))
  .add('Disabled', () => (
    <Box>
      <TextArea
        editable={false}
        value=""
        placeholder="Tell us your thoughts"
        maxCharacters={100}
      />
      <TextArea
        editable={false}
        value="Very happy with the purchase"
        maxCharacters={100}
      />
    </Box>
  ))
  .add('Read Only', () => (
    <Box>
      <TextArea
        readOnly={true}
        value=""
        placeholder="Tell us your thoughts"
        maxCharacters={100}
      />
      <TextArea
        readOnly={true}
        value="Very happy with the purchase"
        maxCharacters={100}
      />
    </Box>
  ))
  .add('Error', () => (
    <Box>
      <TextArea
        error
        aria-invalid="true"
        placeholder="Tell us your thoughts"
        maxCharacters={100}
      />
      <TextArea
        error
        aria-invalid="true"
        value="Very happy with the purchase"
        maxCharacters={100}
      />
    </Box>
  ));
