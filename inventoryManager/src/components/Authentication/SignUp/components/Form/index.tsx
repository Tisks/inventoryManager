import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import TextInput from '../../../../../common/forms/TextInput';
import {
  creatingUserText,
  formFieldNames,
  formProps,
  signUpText,
  validationSchema,
} from './constants';
import {IFormInputs, IFormProps} from './types';

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
    <View style={styles.container}>
      {formProps.map(({...rest}, key) => (
        <TextInput errors={errors} control={control} key={key} {...rest} />
      ))}
      <Button
        mode="contained"
        onPress={onLocalSubmit}
        loading={isLoading}
        disabled={isLoading}
        contentStyle={styles.buttonContent}>
        {isLoading ? creatingUserText : signUpText}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  buttonContent: {
    backgroundColor: '#0d6efd',
    borderRadius: 6,
  },
});

export default Form;
