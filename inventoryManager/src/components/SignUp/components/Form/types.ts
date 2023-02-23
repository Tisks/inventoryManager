import {WithNavigation} from '../../../../../App';

export interface IFormInputs {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export interface IFormProps extends WithNavigation {
  onSubmit: (data: IFormInputs) => void;
}
