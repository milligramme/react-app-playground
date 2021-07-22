import { Container } from "@material-ui/core";

import classes from "./classes.module.css";
import { IProps } from "./types";
import AppBar from "components/organisms/AppBar";

const MainTmpl: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <Container classes={{ root: classes.Container }}>
      <AppBar />
      {children}
    </Container>
  );
};

export default MainTmpl;
