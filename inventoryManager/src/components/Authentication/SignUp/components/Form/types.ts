import { UseFormReset } from 'react-hook-form';
import {WithNavigation} from '../../../../../../App';

export interface IFormInputs {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export interface ISignUpInputs extends Omit<IFormInputs, 'password2'> {}

export interface IFormProps extends WithNavigation {
  onSubmit: (data: IFormInputs, resetForm: UseFormReset<IFormInputs>) => void;
  isLoading?: boolean;
}
