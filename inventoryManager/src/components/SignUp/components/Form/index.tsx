import {Button, Flex, Link, VStack} from 'native-base';
import React from 'react';
import {useForm} from 'react-hook-form';
import TextInput from '../../../../common/forms/TextInput';
import {formFieldNames, formProps, validationSchema} from './constants';
import {IFormInputs, IFormProps} from './types';
import {yupResolver} from '@hookform/resolvers/yup';

const Form: React.FC<IFormProps> = ({onSubmit}) => {
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
      <Button my="20px" onPress={onLocalSubmit} colorScheme="blue" size="lg">
        Sign up
      </Button>
    </VStack>
  );
};

export default Form;
