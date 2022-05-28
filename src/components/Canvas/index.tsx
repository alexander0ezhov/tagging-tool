import React, { useRef, memo, useEffect } from "react";
import TaggingCanvas from "tagging-canvas";

import s from "./index.module.scss";

const Canvas: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  let taggingCanvasProps;

  useEffect(() => {
    if (ref.current) {
      taggingCanvasProps = new TaggingCanvas({ node: ref.current });
    }
  }, []);

  return (
    <canvas className={s.taggingCanvas} ref={ref} width={500} height={500}>
      canvas is not supporting
    </canvas>
  );
};

export default memo(Canvas);
