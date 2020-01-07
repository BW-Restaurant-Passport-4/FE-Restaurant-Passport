          {touched.password && errors.password && <p>{errors.password}</p>}
        </label>
        <label>
          City
          <Field type="text" name="city" placeholder="Enter Your City" />
        </label>
        <button type="submit">Submit</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

const RegisterForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || "",
      first_name: props.first_name || "",
      last_name: props.last_name || "",
      city: props.city || "",
      email: props.email || ""
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().required()
  }),
  handleSubmit(values,           {touched.password && errors.password && <p>{errors.password}</p>}
        </label>
        <label>
          City
          <Field type="text" name="city" placeholder="Enter Your City" />
        </label>
        <button type="submit">Submit</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

const RegisterForm = withFormik({
  mapPropsToValues(props) {
    return {
      username: props.username || "",
      password: props.password || "",
      first_name: props.first_name || "",
      last_name: props.last_name || "",
      city: props.city || "",
      email: props.email || ""
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().required()
  }),
  handleSubmit(values, { pr