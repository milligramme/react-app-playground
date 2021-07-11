import { useState, useCallback } from "react";

import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Input,
  OutlinedInput,
  FilledInput,
  TextField,
  CircularProgress,
  LinearProgress,
  Snackbar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { Info as InfoIcon, Close as CloseIcon } from "@material-ui/icons";

import classes from "./classes.module.css";
import MainTmpl from "components/templates/MainTmpl";

const Showcase: React.FunctionComponent = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSnackbarShow = useCallback(() => {
    setShowSnackbar(true);
  }, []);

  const handleSnackbarHide = useCallback((_e, reason?) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  }, []);

  const handleDialogOpen = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleDialogClose = useCallback((_e, reason?) => {
    if (reason === "backdropClick") {
      return;
    }
    setOpenDialog(false);
  }, []);

  return (
    <MainTmpl>
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
              <Button
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
              >
                Link
              </Button>
            </div>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h4">Loading</Typography>
          <Paper classes={{ root: classes.LayoutPaper }}>
            <Typography>circular</Typography>
            <div className={classes.Items}>
              <CircularProgress />
              <CircularProgress color="secondary" />
            </div>
          </Paper>
          <Paper classes={{ root: classes.LayoutPaper }}>
            <Typography>linear</Typography>
            <div className={classes.Items} style={{ width: 320 }}>
              <LinearProgress />
              <LinearProgress color="secondary" />
            </div>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h4">Notification</Typography>
          <Paper classes={{ root: classes.LayoutPaper }}>
            <Typography>snackbar</Typography>
            <div className={classes.Items}>
              <Button variant="outlined" onClick={handleSnackbarShow}>
                Open snackbar
              </Button>
              <Snackbar
                open={showSnackbar}
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                autoHideDuration={6000}
                onClose={handleSnackbarHide}
                message="Snack! hide after 6sec."
                action={
                  <IconButton
                    color="inherit"
                    size="small"
                    onClick={handleSnackbarHide}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              />
            </div>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h4">Dialog</Typography>
          <Paper classes={{ root: classes.LayoutPaper }}>
            <Typography>dialog</Typography>
            <div className={classes.Items}>
              <Button variant="outlined" onClick={handleDialogOpen}>
                Open dialog
              </Button>
              <Dialog
                classes={{ paper: classes.Dialog }}
                disableEscapeKeyDown={true}
                open={openDialog}
                onClose={handleDialogClose}
              >
                <DialogTitle>Dialog title</DialogTitle>
                <DialogContent>
                  lLorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla dictum blandit mi sed placerat. Aenean interdum sed quam
                  eu vehicula. Vivamus dictum non est in rutrum. Aliquam non
                  urna purus. Sed euismod, lacus sed aliquam sodales, dolor ex
                  dapibus nunc, in sodales tortor libero et nibh. Quisque
                  sollicitudin ultricies tellus, eget ultricies risus mattis eu.{" "}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClose}>ok</Button>
                </DialogActions>
              </Dialog>
            </div>
          </Paper>
        </Box>
      </Container>
    </MainTmpl>
  );
};

export default Showcase;
