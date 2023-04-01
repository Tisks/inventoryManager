import { yupResolver } from '@hookform/resolvers/yup';
import { Button, VStack } from 'native-base';
import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../../../../../common/forms/TextInput';
import {
  creatingUserText,
  formFieldNames,
  formProps,
  signUpText,
  validationSchema
} from './constants';
import { IFormInputs, IFormProps } from './types';

const Form: React.FC<IFormProps> = ({onSubmit, isLoading}) => {
  const {
    control,
    formState: {errors},
    getValues,
    reset,
  } = useForm<IFormInputs>({
    mode: 'onBlur', // "onChange"
    defaultValues: formFieldNames,
    resolver: yupResolver(validationSchema),
  });

  const onLocalSubmit = () => onSubmit(getValues(), reset);
  return (
    <VStack space={3} mt="5">
      {formProps.map(({...rest}, key) => (
        <TextInput errors={errors} control={control} key={key} {...rest} />
      ))}
      <Button
        my="20px"
        onPress={onLocalSubmit}
        colorScheme="blue"
        size="lg"
        isLoading={isLoading}
        isLoadingText={creatingUserText}>
        {signUpText}
      </Button>
    </VStack>
  );
};

export default Form;
