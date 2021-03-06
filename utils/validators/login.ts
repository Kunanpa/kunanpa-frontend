import { REGEX_FORM } from '../../consts/regex'
import { ErrorForm, FormLoginType, ValidatorForm } from '../../types/forms'

const loginValidator:ValidatorForm<FormLoginType, FormLoginType> = (form) => {
  const errors:ErrorForm<FormLoginType> = {
    email: '',
    password: ''
  }
  if (!form.email.trim()) {
    errors.email = 'Campo requerido'
  } else if (!REGEX_FORM.REGEX_EMAIl.test(form.email.trim())) errors.email = 'Email inválido'
  if (!form.password.trim()) {
    errors.password = 'Campo requerido'
  } else if (!REGEX_FORM.REGEX_PASSWORD.test(form.password.trim()))errors.password = 'Contraseña debe tener de 8 a 16 caracteres'
  return errors
}
export default loginValidator
