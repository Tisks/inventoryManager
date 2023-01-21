import {Button, Flex, FormControl, Input, Link, VStack} from 'native-base';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {WithNavigation} from '../../../../App';
import {emailRegex} from '../../../utils/constants';

export interface IFormInputs {
  email: string;
  password: string;
}

interface IFormProps extends WithNavigation {
  onSubmit: (data: IFormInputs) => void;
}

const Form: React.FC<IFormProps> = ({onSubmit, navigation}) => {
  const {
    control,
    formState: {errors},
    getValues,
  } = useForm<IFormInputs>({
    mode: 'onBlur', // "onChange"
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onLocalSubmit = () => onSubmit(getValues());

  return (
    <VStack space={3} mt="5">
      <FormControl isRequired isInvalid={'email' in errors}>
        <FormControl.Label>Email</FormControl.Label>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              onChangeText={val => onChange(val)}
              value={value}
              type="text"
            />
          )}
          name="email"
          rules={{required: 'Email is required', pattern: emailRegex}}
        />
        <FormControl.ErrorMessage>
          {errors.email?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={'password' in errors}>
        <FormControl.Label>Password</FormControl.Label>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              onChangeText={val => onChange(val)}
              value={value}
              type="password"
            />
          )}
          name="password"
          rules={{required: 'Password is required'}}
        />
        <FormControl.ErrorMessage>
          {errors.password?.message}
        </FormControl.ErrorMessage>
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
      </FormControl>
      <Button my="20px" onPress={onLocalSubmit} colorScheme="blue" size="lg">
        Login
      </Button>
    </VStack>
  );
};

export default Form;
