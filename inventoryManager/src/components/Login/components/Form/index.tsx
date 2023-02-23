import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, VStack} from 'native-base';
import {useForm} from 'react-hook-form';
import {WithNavigation} from '../../../../../App';
import TextInput from '../../../../common/forms/TextInput';
import {formFieldNames, formProps, validationSchema} from './constants';
import SignUpLink from './SignUpLink';
import {IFormProps, IFormInputs} from './types';

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
        Login
      </Button>
    </VStack>
  );
};

export default Form;
