import { Box, Typography } from "@material-ui/core";

import MainTmpl from "components/templates/MainTmpl";

const Home: React.FunctionComponent = () => (
  <MainTmpl>
    <Box>
      <Typography variant="h6">Home</Typography>
      <Typography>do something</Typography>
    </Box>
  </MainTmpl>
);

export default Home;
