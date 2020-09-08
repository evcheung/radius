import React from 'react';
import styled from 'styled-components/native';
import { system } from 'styled-system';
import css from '@styled-system/css';
import { Flex, FlexProps } from '../flex';
import { Box } from '../box';

type align = 'start' | 'end' | 'center';

const getAlignment = (value: align) =>
  value === 'start' || value === 'end' ? 'flex-' + value : value;

const stack = system({
  axis: {
    property: 'flexDirection',
    transform: value => (value === 'horizontal' ? 'row' : 'column'),
  },
  alignment: {
    property: 'justifyContent',
    transform: getAlignment,
  },
  distribution: {
    property: 'alignItems',
    transform: getAlignment,
  },
});

export type StackProps = {
  axis?: 'horizontal' | 'vertical';
  space?: number | number[];
  alignment?: align;
  distribution?: align;
} & FlexProps;

export type SpacedContainerProps = {
  axis?: 'horizontal' | 'vertical';
  space?: number | number[];
  isLastChild: boolean;
};

export const StyledStack = styled(Flex)<StackProps>`
  ${stack}
`;

// TODO: Review solution below as substitute for "select all children" combinator and last child selector (unsupported in RN)
export const SpacedContainer = styled(Box)<SpacedContainerProps>`
  ${props =>
    css({
      [props.axis === 'horizontal'
        ? 'marginRight'
        : 'marginBottom']: props.space,
    })(props)}

  ${props =>
    props.isLastChild &&
    css({
      [props.axis === 'horizontal' ? 'marginRight' : 'marginBottom']: 0,
    })(props)}
`;

export const Stack = ({ children, ...props }: any) => (
  <StyledStack {...props}>
    {children.map((child: any, i: number) => (
      <SpacedContainer
        axis={props.axis}
        space={props.space}
        isLastChild={children.length - 1 === i}
      >
        {child}
      </SpacedContainer>
    ))}
  </StyledStack>
);

Stack.defaultProps = {
  axis: 'horizontal',
  space: 3,
};
