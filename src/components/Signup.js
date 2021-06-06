import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";

export const Signup = () => {
  const initialValues = {
    firstName: "",
    lastNmae: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  };
  return (
    <Formik value={initialValues}>
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <TextField
              label="I accept terms and conditions "
              name="agreeToTerms"
              type="checkbox"
            />
            <button className="btn btn-dark mt-3 ">Register</button>

            <button className="btn btn-danger mt-3 ml-3">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
