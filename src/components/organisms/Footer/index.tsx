import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import classes from "./classes.module.css";

const Footer: React.FunctionComponent = () => {
  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <BottomNavigation
      classes={{
        root: classes.BottomNavigation,
      }}
      // component="footer"
      showLabels={true}
      onChange={(_event, value) => handleChange(value)}
    >
      <BottomNavigationAction
        classes={{
          root: classes.BottomNavigationAction,
          wrapper: classes.BottomNavigationActionWrapper,
        }}
        label="A"
        value="A"
      />

      <BottomNavigationAction
        classes={{
          root: classes.BottomNavigationAction,
          wrapper: classes.BottomNavigationActionWrapper,
        }}
        label="B"
        value="B"
      />
    </BottomNavigation>
  );
};
export default Footer;
