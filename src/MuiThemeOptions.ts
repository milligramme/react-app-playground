import { ThemeOptions } from "@mui/material/styles/createTheme";

const muiThemeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: { fontSize: 12, fontWeight: 600 },
        sizeLarge: { fontSize: 16, fontWeight: 600 },
      },
      defaultProps: {
        size: "small",
        disableRipple: true,
        // label: { textTransform: "none" },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
        disableRipple: true,
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFab: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: "dense",
      },
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
