import React, { forwardRef, useState, useContext } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { StyledComponentProps, ThemeContext } from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  typography,
} from 'styled-system';
import { Box } from '../box';
import { Textbox, defaultTextStyles } from '../text';
import { TypographyFunctionsProps } from '../typography-functions';
import { focusRing, hiddenOffsetRing, invisibleRing } from '../shared-styles';

type TextAreaProps = StyledComponentProps<
  any, // TODO: Was changed from 'textinput', investigate proper typing for StyledComponentProps with React Native
  any,
  {
    placeholder?: string;
    maxCharacters?: number | undefined;
    error?: Boolean;
    value?: String;
  } & TypographyFunctionsProps,
  never
>;

const ContentArea = styled(TextInput)<
  {
    error?: Boolean;
    focused?: Boolean;
  } & TypographyFunctionsProps
>`
  ${(props: any) => (props.focused ? focusRing : null)}

  width: 100%;
  min-height: ${(props: any) => props.theme.sizes[3] + 14}px;
  padding: ${(props: any) => props.theme.space[2]}px;
  border-color: ${(props: any) => {
    if (props.error) return props.theme.colors.ui.error;
    if (!props.editable) return props.theme.colors.ui.disabled;
    if (props.readOnly) return props.theme.colors.ui.secondary;
    else return props.theme.colors.ui.secondary;
  }};

  color: ${(props: any) => {
    if (!props.editable) return props.theme.colors.text.disabled;
    else return props.theme.colors.text.primary;
  }};

  opacity: ${(props: any) => {
    if (!props.editable) return 1 /* correct opacity on iOS */;
    else return props.opacity || 1;
  }};

  background-color: ${(props: any) => {
    if (!props.editable) return props.theme.colors.ui.disabled;
    if (props.readOnly) return props.theme.colors.ui.tertiary;
    else return props.backgroundColor;
  }};

  ${compose(space, typography, layout, flexbox, border, position, color)}
`;

ContentArea.defaultProps = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 0,
  bg: 'ui.quaternary',
  // matching Textbox body styles
  ...defaultTextStyles,
  fontSize: 2,
  lineHeight: 'copy.2',
};

export const StyledText = styled(TextInput)<
  {
    error?: Boolean;
  } & TypographyFunctionsProps
>`
  color: ${props =>
    props.error
      ? props.theme.colors.text.error
      : props.theme.colors.text.secondary};
`;

const getBackgroundColor = (editable: boolean, readOnly: boolean) => {
  if (!editable) return 'ui.disabled';
  if (readOnly) return 'ui.tertiary';
  else return 'ui.quaternary';
};
// TODO: Review below. Is this the best way to hook into theme values outside of properties from 'compose'?
const getPlaceholderTextColor = (
  theme: any,
  editable: boolean,
  readOnly: boolean,
  focused: boolean
) => {
  if (!editable) return theme.colors.text.disabled;
  if (readOnly) return theme.colors.text.secondary;
  if (focused) return 'transparent';
  else return theme.colors.text.secondary;
};

// TODO: review solution below
// No equivalent outline property for RN. Using invisible ring to prevent shifting input when focused
const FocusRing = styled(Box)<{ focused: Boolean }>`
  ${(props: any) => (props.focused ? focusRing : invisibleRing)}
`;

const HiddenOffsetRing = styled(Box)<{ focused: Boolean }>`
  ${(props: any) => (props.focused ? hiddenOffsetRing : invisibleRing)}
`;

export const TextArea = forwardRef<JSX.Element, TextAreaProps>(
  (
    {
      maxCharacters,
      placeholder,
      editable = true,
      readOnly = false,
      error,
      mb,
      mt,
      mx,
      my,
      ml,
      mr,
      ...props
    },
    ref
  ) => {
    const theme = useContext(ThemeContext);

    const [characterCount, setCharacterCount] = useState(
      props.value ? props.value.length : 0
    );
    const [value, setChangedText] = React.useState();
    const [focused, setFocused] = React.useState(false);

    const setTextAndCharacterCount = (text: any) => {
      setCharacterCount(text.length);
      setChangedText(text);
    };

    const isError =
      error || (maxCharacters && characterCount > maxCharacters) ? true : false;

    return (
      <Box mx={mx} my={my} mb={mb} mt={mt} ml={ml} mr={mr}>
        <FocusRing focused={focused}>
          <HiddenOffsetRing focused={focused}>
            <ContentArea
              multiline
              mb={0}
              // TODO: fix TS error
              ref={ref}
              placeholder={placeholder}
              placeholderTextColor={getPlaceholderTextColor(
                theme,
                editable,
                readOnly,
                focused
              )}
              editable={editable}
              onChangeText={(text: any) =>
                readOnly ? {} : setTextAndCharacterCount(text)
              }
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              focused={focused}
              value={value}
              error={isError}
              aria-invalid={isError ? 'true' : 'false'}
              bg={getBackgroundColor(editable, readOnly)}
              {...props}
            />
          </HiddenOffsetRing>
        </FocusRing>
        {maxCharacters ? (
          <Textbox
            variant="hint"
            width="100%"
            color={isError ? 'text.error' : 'text.secondary'}
            textAlign="right"
          >
            {`${characterCount}/${maxCharacters}`}
          </Textbox>
        ) : null}
      </Box>
    );
  }
);

TextArea.defaultProps = {
  error: false,
  placeholder: '',
  maxCharacters: undefined,
};
