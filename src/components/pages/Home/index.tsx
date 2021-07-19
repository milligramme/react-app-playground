import { useState, useEffect } from "react";

import { Box, Typography } from "@material-ui/core";

import MainTmpl from "components/templates/MainTmpl";
import Canvas from "components/atoms/Canvas";
import sketch from "static/sketches/a";

const Home: React.FunctionComponent = () => {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("success");

    // status: idle on unmount
    return () => setStatus("idle");
  }, []);

  return (
    <MainTmpl>
      <Box>
        <Typography variant="h6">{`Home ${status}`}</Typography>

        <Canvas sketch={sketch} />
      </Box>
    </MainTmpl>
  );
};

export default Home;
