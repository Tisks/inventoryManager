import {WithNavigation} from '../../../../../App';

export interface IFormInputs {
  email: string;
  password: string;
}

export interface IFormProps extends WithNavigation {
  onSubmit: (data: IFormInputs) => void;
}
