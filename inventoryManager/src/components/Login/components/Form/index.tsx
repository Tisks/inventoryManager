import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Flex, Link, VStack} from 'native-base';
import {useForm} from 'react-hook-form';
import {TNavigation, WithNavigation} from '../../../../../App';
import TextInput from '../../../../common/forms/TextInput';
import {
  formFieldNames,
  formProps,
  loginText,
  signUpText,
  validationSchema,
} from './constants';
import {IFormProps, IFormInputs} from './types';

const SignUpLink: React.FC<{navigation: TNavigation}> = ({navigation}) => (
  <Flex flexDir="row" justifyContent="flex-end">
    Don't have an account?
    <Link
      _text={{
        color: 'indigo.500',
      }}
      ml="1"
      onPress={() => navigation.push('SignUp')}>
      {signUpText}
    </Link>
  </Flex>
);

const Form: React.FC<IFormProps> = ({onSubmit, navigation}) => {
  const {
    control,
    formState: {errors},
    getValues,
  } = useForm<IFormInputs>({
    mode: 'onBlur', // "onChange"
    defaultValues: formFieldNames,
    resolver: yupResolver(validationSchema),
  });

  const onLocalSubmit = () => onSubmit(getValues());

  return (
    <VStack space={3} mt="5">
      {formProps.map(({...rest}, key) => (
        <TextInput errors={errors} control={control} key={key} {...rest} />
      ))}
      <SignUpLink navigation={navigation} />
      <Button my="20px" onPress={onLocalSubmit} colorScheme="blue" size="lg">
        {loginText}
      </Button>
    </VStack>
  );
};

export default Form;
