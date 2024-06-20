import * as Yup from 'yup';

export const SchemaForgot = Yup.object().shape({
  email: Yup.string().email().required(),
});
