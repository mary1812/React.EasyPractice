import * as yup from "yup";
  
export const SIGN_IN_SCHEMA = yup.object({
    email: yup.string().email('email неправильный ').required('это обязательное поле'),
    password: yup
      .string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
        'Пароль должен содержать 8 - 32 символа, заглавную, строчную буквы, число и спец символ'
      ).required(),
  });

export const { TODO_SCHEMA } = yup.object({
  taskText: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z]).{,20}/)
})