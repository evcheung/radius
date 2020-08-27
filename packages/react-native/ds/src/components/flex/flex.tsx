import styled from 'styled-components/native';
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { Box } from '../box';

export type FlexProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

export const Flex = styled(Box)<FlexProps>({});

Flex.defaultProps = {
  flexDirection: 'row',
};
