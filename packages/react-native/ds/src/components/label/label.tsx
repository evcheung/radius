import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { StyledComponentProps } from 'styled-components';
import { TypographyFunctionsProps } from '../typography-functions';
import { Textbox } from '../text';

type AdornmentProp = 'required' | string | JSX.Element;

type StyledLabelProps = {
  /** Apply the mandatory adornment */
  required?: boolean;
  /** A custom adornment to apply */
  adornment?: AdornmentProp;
  /** React Native element to render */
  as?: any;
} & TypographyFunctionsProps;

export const StyledLabel = styled(Textbox)<StyledLabelProps>`
  /* display: flex; */
  /* align-items: baseline; */
  /* justify-content: center; */
  /* width: 100%; */
`;

// StyledLabel.defaultProps = {
//   pl: 0,
//   pr: 0,
// };

export type LabelProps = StyledComponentProps<
  'label',
  any,
  StyledLabelProps,
  never
>;

const getAdornment = (adornment: AdornmentProp) => {
  if (typeof adornment === 'string')
    return (
      <Textbox variant="label" color="text.secondary" pl={1}>
        {` ${adornment}`}
      </Textbox>
    );
  return adornment;
};

export const Label = forwardRef<JSX.Element, LabelProps>( ///////
  ({ children, as, ...props }, ref) => (
    <StyledLabel
      as={as}
      variant="label"
      ref={ref}
      color="text.primary"
      {...props}
    >
      {children}
      {props.adornment && getAdornment(props.adornment)}
      {props.required && (
        <Textbox variant="label" color="brand.secondary">
          *
        </Textbox>
      )}
    </StyledLabel>
  )
);
// do we need "as" anymore? Only Text and TextInput to worry about
// No more label, legend, etc
// Test with rest of Form components. May also remove StyledLabel altogether
// Should this be wrapped in Box instead?

// no pseudo classes
// can't nest views inside text - alignment issues and not supported for Android
Label.defaultProps = {
  required: false,
  // as: Textbox,
};
