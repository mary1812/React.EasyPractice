import * as yup from "yup";
  
export const SIGN_IN_SCHEMA = yup.object({
    email: yup.string().email('email неправильный ').required('это обязательное поле'),
    password: yup
      .string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/
      ).required(),
  });


