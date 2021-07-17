import { useEffect } from "react";
import p5 from "p5";

interface CanvasProps {
  [key: string]: unknown;
  sketch: (p5: p5) => void;
}

const Canvas = (props: CanvasProps) => {
  useEffect(() => {
    const p5instance = new p5(props.sketch);

    // remove instance on unmount
    return () => p5instance.remove();
  }, [props.sketch]);

  return <></>;
};
export default Canvas;
