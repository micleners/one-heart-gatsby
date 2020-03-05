import { css } from 'styled-components';

export const fixed = ({ x, y }) => {
  return css`
    position: fixed;
    top: ${y};
    left: ${x};
  `;
};
