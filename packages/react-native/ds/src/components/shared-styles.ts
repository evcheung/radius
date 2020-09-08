import { css } from 'styled-components';

export const focusRing = css`
  border-width: 1px;
  border-color: ${props => props.theme.colors.brand.accent};
`;

export const hiddenOffsetRing = css`
  border-width: 1px;
  border-color: ${props => props.theme.colors.bg.primary};
`;

export const invisibleRing = css`
  border-width: 1px;
  border-color: ${props => props.theme.colors.bg.primary};
`;
