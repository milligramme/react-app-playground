import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Typography } from "@material-ui/core";

import MainTmpl from "components/templates/MainTmpl";
import Canvas from "components/atoms/Canvas";
import sketch from "static/sketches/a";
import { GlobalState } from "state/Store/ducks";
import { PageStatusState } from "state/Store/ducks/PageStatus";
import { setPageStatus } from "state/Store/ducks/PageStatus/actions";

const Home: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { status } = useSelector<GlobalState, PageStatusState>(
    (state) => state.pageStatus
  );

  useEffect(() => {
    dispatch(setPageStatus("success"));

    // status: idle on unmount
    return () => {
      dispatch(setPageStatus("idle"));
    };
  }, [dispatch]);

  return (
    <MainTmpl>
      <Box>
        <Typography variant="h6">{`Home ${status}`}</Typography>

        {status === "success" && <Canvas sketch={sketch} />}
      </Box>
    </MainTmpl>
  );
};

export default Home;
