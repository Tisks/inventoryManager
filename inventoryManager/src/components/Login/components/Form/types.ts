import {UseFormReset, UseFormResetField} from 'react-hook-form';
import {WithNavigation} from '../../../../../App';

export interface IFormInputs {
  email: string;
  password: string;
}

export interface IFormProps extends WithNavigation {
  onSubmit: (
    data: IFormInputs,
    resetField: UseFormResetField<IFormInputs>,
    fieldToBeReset: keyof IFormInputs,
  ) => void;
  isLoading?: boolean;
}
