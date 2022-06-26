import styled from 'styled-components';

import { HEIGHT, FONT_SIZE } from 'properties/height';
import { Default } from 'properties/color';

interface TodoButtonProps {
  color?: string;
  disabled?: boolean;
  width?: string | number;
}

const TodoButton = styled.button<TodoButtonProps>`
  all: unset;
  margin: 0;
  box-sizing: border-box;
  background: transparent;
  width: ${({ width }) => (width ?? 'auto')};
  height: ${HEIGHT};
  font-size: ${FONT_SIZE};
  padding-left: 0.25vw;
  padding-right: 0.25vw;
  padding-top: 0.25vh;
  padding-bottom: 0.25vh;
  color: ${({ color }) => (color ?? Default.MAIN_COLOR)};
  border: 1px solid ${({ color }) => (color ?? Default.MAIN_COLOR)};
  border-radius: 10px;
  transition: all linear 100ms;
  cursor: pointer;

  &:hover {
    color: ${Default.BRIGHT};
    background-color: ${({ color }) => (color ?? Default.MAIN_COLOR)};
  }

  &:disabled {
    background-color: ${Default.STROKE};
    border: ${Default.GRAY};
  }
`;

export default TodoButton;
