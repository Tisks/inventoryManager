import { UseFormReset } from 'react-hook-form';
import { WithNavigation } from '../../../../../../App';

export interface IFormInputs {
  email: string;
  password: string;
}

export interface IFormProps extends WithNavigation {
  onSubmit: (
    data: IFormInputs,
    resetField: UseFormReset<IFormInputs>,
    fieldToBeReset: keyof IFormInputs,
  ) => void;
  isLoading?: boolean;
}
