import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Input,
  OutlinedInput,
  FilledInput,
  TextField
} from "@material-ui/core";
import { Info as InfoIcon } from "@material-ui/icons";

import classes from "./classes.module.css";

const Showcase: React.FunctionComponent = () => {
  console.log(classes);
  return (
    <Container>
      <Box>
        <Typography variant="h4">TextField</Typography>
        <Paper classes={{ root: classes.LayoutPaper }}>
          <Typography>standard input</Typography>
          <div className={classes.Items}>
            <Input />
            <TextField label="label" />
            <TextField label="label" InputLabelProps={{ shrink: true }} />
            <TextField label="label" error={true} />
          </div>
        </Paper>
        <Paper classes={{ root: classes.LayoutPaper }}>
          <Typography>outlined input</Typography>
          <div className={classes.Items}>
            <OutlinedInput />
            <TextField label="label" variant="outlined" />
            <TextField
              label="label"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField label="label" variant="outlined" error={true} />
          </div>
        </Paper>
        <Paper classes={{ root: classes.LayoutPaper }}>
          <Typography>filled input</Typography>
          <div className={classes.Items}>
            <FilledInput />
            <TextField label="label" variant="filled" />
            <TextField
              label="label"
              variant="filled"
              InputLabelProps={{ shrink: true }}
            />
            <TextField label="label" variant="filled" error={true} />
          </div>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h4">Button</Typography>
        <Paper classes={{ root: classes.LayoutPaper }}>
          <Typography>contained button</Typography>
          <div className={classes.Items}>
            <Button variant="contained" startIcon={<InfoIcon />}>
              Default
            </Button>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Link
            </Button>
          </div>
        </Paper>
        <Paper classes={{ root: classes.LayoutPaper }}>
          <Typography>text button</Typography>
          <div className={classes.Items}>
            <Button startIcon={<InfoIcon />}>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons" color="primary">
              Link
            </Button>
          </div>
        </Paper>
        <Paper classes={{ root: classes.LayoutPaper }}>
          <Typography>outlined button</Typography>
          <div className={classes.Items}>
            <Button variant="outlined" startIcon={<InfoIcon />}>
              Default
            </Button>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              Link
            </Button>
          </div>
        </Paper>
      </Box>
    </Container>
  );
};

export default Showcase;