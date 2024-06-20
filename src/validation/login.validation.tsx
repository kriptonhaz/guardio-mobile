import * as Yup from 'yup';

export const SchemaLogin = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
