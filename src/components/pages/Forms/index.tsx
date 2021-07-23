import { useEffect } from "react";
import { Form, Field } from "react-final-form";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";

import MainTmpl from "components/templates/MainTmpl";
import { sleep } from "lib/helpers";
import { useListUsersApi } from "utils/api/hooks/useListUsersApi";
import { User } from "types";

interface FormValue {
  name: string;
  user: number;
}

const Forms: React.FunctionComponent = () => {
  const required = (value: FormValue) =>
    value === undefined ? "required" : undefined;

  const { data: users, isLoading, isError, isSuccess } = useListUsersApi();

  useEffect(() => {
    if (isError) {
      console.log("error occured");
    }
  }, [isError]);

  if (isLoading) {
    <MainTmpl>loading...</MainTmpl>;
  }

  return (
    <MainTmpl>
      <Box>
        <Typography variant="h6">Forms</Typography>

        <Form
          onSubmit={async (values) => {
            await sleep(1000);
            console.log(JSON.stringify({ values }, null, "  "));
          }}
          subscription={{ submitting: true, values: true }}
        >
          {({ handleSubmit, submitting, values }) => (
            <>
              <pre>{JSON.stringify({ values }, null, "  ")}</pre>
              <Box>
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
                        shrink: true,
                      }}
                      FormHelperTextProps={{
                        variant: "outlined",
                        error: !!meta.error,
                      }}
                      helperText={meta.error && meta.touched ? meta.error : ""}
                    />
                  )}
                </Field>
              </Box>
              <Box>
                <Field name="user" type="radio" subscription={{ value: true }}>
                  {({ input }) => (
                    <FormControl>
                      <FormLabel>Select favorite user</FormLabel>
                      <RadioGroup
                        value={input.value}
                        row={false}
                        onChange={input.onChange}
                      >
                        {isSuccess &&
                          (users as User[]).map((user) => (
                            <FormControlLabel
                              key={user.id}
                              value={String(user.id)}
                              control={<Radio />}
                              label={`${user.name} (${user.email})`}
                            />
                          ))}
                      </RadioGroup>
                    </FormControl>
                  )}
                </Field>
              </Box>
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
