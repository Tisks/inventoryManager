import {Button, Flex, Link, VStack} from 'native-base';
import React from 'react';
import {useForm} from 'react-hook-form';
import {TNavigation, WithNavigation} from '../../../../App';
import TextInput, {ITextInputFormProps} from '../../../common/forms/TextInput';
import {emailRegex} from '../../../utils/constants';

export interface IFormInputs {
  name: string;
  email: string;
  password: string;
  password2: string;
}

interface IFormProps extends WithNavigation {
  onSubmit: (data: IFormInputs) => void;
}

const SignUpLink: React.FC<{navigation: TNavigation}> = ({navigation}) => (
  <Flex flexDir="row" justifyContent="flex-end">
    Don't have an account?
    <Link
      _text={{
        color: 'indigo.500',
      }}
      ml="1"
      onPress={() => navigation.push('Home2')}>
      Sign up
    </Link>
  </Flex>
);

const formProps = (navigation: TNavigation): ITextInputFormProps[] => [
  {
    label: 'Email',
    value: 'email',
    rules: {required: 'Email is required', pattern: emailRegex},
  },
  {
    label: 'Password',
    value: 'password',
    rules: {required: 'Password is required'},
    inputType: 'password',
    children: <SignUpLink navigation={navigation} />,
  },
];

const Form: React.FC<IFormProps> = ({onSubmit, navigation}) => {
  const {
    control,
    formState: {errors},
    getValues,
  } = useForm<IFormInputs>({
    mode: 'onBlur', // "onChange"
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password2: '',
    },
  });

  const onLocalSubmit = () => onSubmit(getValues());

  return (
    <VStack space={3} mt="5">
      {formProps(navigation).map(({children, ...rest}) => (
        <TextInput errors={errors} {...rest} control={control}>
          {children}
        </TextInput>
      ))}
      <Button my="20px" onPress={onLocalSubmit} colorScheme="blue" size="lg">
        Login
      </Button>
    </VStack>
  );
};

export default Form;
