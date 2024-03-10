import React, { ReactNode, useRef, useState, useEffect } from "react";
import styled from "styled-components";

export interface EditableBoard {
  width: number;
  height: number;
  left?: number;
  top?: number;
  backgroundColor: string;
  unit: string;
  children?: ReactNode;
}

const EditableBoard: React.FC<EditableBoard> = ({
  width,
  height,
  backgroundColor,
  left,
  top,
  children,
  unit,
}): React.ReactElement => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [calculatedHeight, setCalculatedHeight] = useState(height || 0);

  useEffect(() => {
    if (boardRef.current) {
      setCalculatedHeight(() => Math.max(height, boardRef.current?.scrollHeight || 0));
    }
  }, [children, height]);

  return (
    <Board
      key={`board-${calculatedHeight}`}
      width={width}
      height={calculatedHeight}
      backgroundColor={backgroundColor}
      unit={unit}
      left={left}
      top={top}
    >
      {children}
    </Board>
  );
};

const Board = styled.div<EditableBoard>`
  width: ${({ width, unit }) => `${width}${unit}`};
  height: ${({ height, unit }) => `${height}${unit}`};
  left: ${({ left, unit }) => `${left}${unit}`};
  top: ${({ top, unit }) => `${top}${unit}`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
`;

export default EditableBoard;
