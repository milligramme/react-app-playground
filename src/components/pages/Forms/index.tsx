import { Form, Field } from "react-final-form";

import { Box, Typography, TextField, Button } from "@material-ui/core";

import MainTmpl from "components/templates/MainTmpl";
import { sleep } from "lib/helpers";

interface FormValue {
  name: string;
}

const Forms: React.FunctionComponent = () => {
  const required = (value: FormValue) =>
    value === undefined ? "required" : undefined;
  return (
    <MainTmpl>
      <Box>
        <Typography variant="h6">Forms</Typography>

        <Form
          onSubmit={async (values) => {
            await sleep(1000);
            console.log(JSON.stringify({ values }, null, "  "));
          }}
          subscription={{ submitting: true }}
        >
          {({ handleSubmit, submitting }) => (
            <>
              <Field
                name="name"
                validate={required}
                subscription={{ value: true, error: true, touched: true }}
              >
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    error={!!meta.error && meta.touched}
                    variant="outlined"
                    label="name"
                    InputLabelProps={{
                      shrink: true
                    }}
                    FormHelperTextProps={{
                      variant: "outlined",
                      error: !!meta.error
                    }}
                    helperText={meta.error && meta.touched ? meta.error : ""}
                  />
                )}
              </Field>
              <Box>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  submit
                </Button>
              </Box>
            </>
          )}
        </Form>
      </Box>
    </MainTmpl>
  );
};

export default Forms;
