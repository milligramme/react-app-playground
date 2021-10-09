import { ThemeOptions } from "@mui/material/styles/createTheme";

const muiThemeOptions: ThemeOptions = {
  overrides: {
    MuiButton: {
      sizeSmall: { fontSize: 12, fontWeight: 600 },
      sizeLarge: { fontSize: 16, fontWeight: 600 },
      label: { textTransform: "none" },
    },
  },
  props: {
    MuiButton: {
      size: "small",
      disableRipple: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiFilledInput: {
      margin: "dense",
    },
    MuiFormControl: {
      margin: "dense",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
      disableRipple: true,
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: "dense",
    },
    MuiFab: {
      size: "small",
    },
    MuiTable: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
    },
    MuiToolbar: {
      variant: "dense",
    },
  },
  palette: {
    primary: { main: "hsl(120, 75%, 25%)" },
    secondary: { main: "hsl(45, 75%, 25%)" },
    error: { main: "hsl(360, 50%, 50%)" },
    warning: { main: "hsl(30, 100%, 50%)" },
    info: { main: "hsl(200, 100%, 50%)" },
    success: { main: "hsl(135, 100%, 50%)" },
    text: {
      primary: "hsla(0, 0%, 0%, 0.87)",
      secondary: "hsla(0, 0%, 0%, 0.54)",
      disabled: "hsla(0, 0%, 0%, 0.38)",
    },
  },
  typography: {
    fontFamily: ["sans-serif"].join(","),
  },
};

export default muiThemeOptions;
