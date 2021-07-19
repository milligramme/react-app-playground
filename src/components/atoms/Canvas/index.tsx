import { useEffect, createRef } from "react";
import p5 from "p5";

interface CanvasProps {
  [key: string]: unknown;
  sketch: (p5: p5) => void;
}

const Canvas = (props: CanvasProps) => {
  const wrapper = createRef<HTMLDivElement>();

  useEffect(() => {
    if (wrapper.current === null) return;
    const p5instance = new p5(props.sketch, wrapper.current);

    // remove instance on unmount
    return () => p5instance.remove();
  }, [wrapper, props.sketch]);

  return <div ref={wrapper} />;
};
export default Canvas;
