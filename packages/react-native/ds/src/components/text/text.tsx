import styled from 'styled-components/native';
import { variant } from 'styled-system';
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from '../typography-functions';

export type TextProps = {
  variant: 'body' | 'caption' | 'hint' | 'label';
} & TypographyFunctionsProps;

const defaultTextStyles = {
  fontFamily: 'body',
  fontWeight: 'regular',
  color: 'text.primary',
  mt: 0,
  mb: 0,
};

const textVariants = variant({
  variants: {
    body: {
      ...defaultTextStyles,
      fontSize: 2,
      lineHeight: 'copy.2',
    },
    caption: {
      ...defaultTextStyles,
      fontSize: 1,
      lineHeight: 'copy.1',
    },
    hint: {
      ...defaultTextStyles,
      fontSize: 0,
      lineHeight: 'copy.0',
    },
    label: {
      ...defaultTextStyles,
      fontFamily: 'heading',
      fontSize: 1,
      lineHeight: 'copy.1',
      fontWeight: 'medium',
    },
  },
});

export const Textbox = styled.Text<TextProps>`
  ${textVariants}
  ${typographyFunctions}
`;

Textbox.defaultProps = {
  variant: 'body',
};
