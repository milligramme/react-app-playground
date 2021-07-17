import { useEffect } from "react";
import p5 from "p5";

const Canvas = (props: any) => {
  useEffect(() => {
    const p5instance = new p5(props.sketch);

    // remove instance on unmount
    return () => p5instance.remove();
  }, [props.sketch]);

  return <></>;
};
export default Canvas;
