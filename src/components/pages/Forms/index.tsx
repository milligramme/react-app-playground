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
  FormHelperText,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

import MainTmpl from "components/templates/MainTmpl";
import { sleep } from "lib/helpers";
import { useListUsersApi } from "utils/api/hooks/useListUsersApi";
import { User } from "types";

interface FormValue {
  name: string;
  user: number;
  users: number[];
}

const Forms: React.FunctionComponent = () => {
  const required = (value: FormValue) => {
    if (Array.isArray(value)) {
      return value.length === 0 ? "required" : undefined;
    }
    return value === undefined ? "required" : undefined;
  };

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
          subscription={{
            submitting: true,
            values: true,
            errors: true,
            touched: true,
          }}
        >
          {({ handleSubmit, submitting, values, errors, touched }) => (
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
                <Field
                  name="user"
                  validate={required}
                  type="radio"
                  subscription={{ value: true, error: true, touched: true }}
                >
                  {({ input, meta }) => (
                    <FormControl error={!!meta.error && meta.touched}>
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
                      {!!meta.error && meta.touched && (
                        <FormHelperText>{meta.error}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Box>
                <FormControl error={!!errors?.users && touched?.users}>
                  <FormLabel>Select favorite users</FormLabel>
                  <FormGroup row={true}>
                    {isSuccess &&
                      (users as User[]).map((user) => (
                        <FormControlLabel
                          key={user.id}
                          name="users"
                          value={String(user.id)}
                          control={
                            <Field
                              name="users"
                              validate={required}
                              type="checkbox"
                              subscription={{
                                value: true,
                                error: true,
                                touched: true,
                              }}
                            >
                              {({ input }) => (
                                <Checkbox onChange={input.onChange} />
                              )}
                            </Field>
                          }
                          label={`${user.name} (${user.email})`}
                        />
                      ))}
                  </FormGroup>
                  {!!errors?.users && touched?.users && (
                    <FormHelperText>{errors?.users}</FormHelperText>
                  )}
                </FormControl>
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
