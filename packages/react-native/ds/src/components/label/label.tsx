import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { StyledComponentProps } from 'styled-components';
import { TypographyFunctionsProps } from '../typography-functions';
import { Textbox } from '../text';
import { Box } from '../box';

type AdornmentProp = 'required' | string | JSX.Element;

type CenterAlignedBoxProps = {
  /** Apply the mandatory adornment */
  required?: boolean;
  /** A custom adornment to apply */
  adornment?: AdornmentProp;
} & TypographyFunctionsProps;

export const CenterAlignedBox = styled(Box)<CenterAlignedBoxProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

CenterAlignedBox.defaultProps = {
  pl: 0,
  pr: 0,
};

export type LabelProps = StyledComponentProps<
  'label',
  any,
  CenterAlignedBoxProps,
  never
>;

const getAdornment = (adornment: AdornmentProp) => {
  if (typeof adornment === 'string')
    return (
      <Textbox variant="label" color="text.secondary" ml={1}>
        {adornment}
      </Textbox>
    );
  return <Box ml={1}>{adornment}</Box>;
};

export const Label = forwardRef<JSX.Element, LabelProps>(
  ({ children, ...props }, ref) => (
    // TODO: fix TS error
    <CenterAlignedBox {...props} ref={ref}>
      <Textbox variant="label" color="text.primary">
        {children}
      </Textbox>
      {props.adornment && getAdornment(props.adornment)}
      {props.required && (
        <Textbox variant="label" color="brand.secondary" ml={1}>
          *
        </Textbox>
      )}
    </CenterAlignedBox>
  )
);

Label.defaultProps = {
  required: false,
};
