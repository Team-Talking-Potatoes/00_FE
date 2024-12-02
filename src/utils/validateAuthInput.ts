import type { TextInput, PasswordInput } from '@/@types/auth';
import { REGEX } from '@/constants/auth';

interface ValidateOptions {
  name: keyof TextInput | keyof PasswordInput;
  value: string;
  password?: string;
}

const validate = ({ name, value, password }: ValidateOptions): boolean => {
  switch (name) {
    case 'email':
      return REGEX.email.test(value);
    case 'password':
      return REGEX.password.test(value);
    case 'passwordConfirm':
      return password ? value === password : false;
    case 'name':
      return value.length >= 2 && value.length <= 10;
    case 'nickname':
      return value.length >= 2 && value.length <= 10;
    case 'contact':
      return REGEX.contact.test(value);
    case 'birthDate':
      return REGEX.birthDate.test(value);
    case 'emailCode':
      return REGEX.emailCode.test(value);
    default:
      return false;
  }
};

export default validate;
