import styled from "styled-components";

import { EditorProps } from "../../types/ui";

const EditorBlockWrapper = styled.div.attrs<EditorProps>(
  ({ left, top, width, height, unit, customClasses }) => ({
    style: {
      top: top && `${top}${unit}`,
      left: left && `${left}${unit}`,
      width: width && `${width}${unit}`,
      height: height && `${height}${unit}`,
    },
    className: customClasses
  })
)<EditorProps>`
  position: relative;
`;

export default EditorBlockWrapper;
