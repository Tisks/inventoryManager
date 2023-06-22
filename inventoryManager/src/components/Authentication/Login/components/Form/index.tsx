import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Text} from 'react-native-paper';
import {Flex, View} from 'native-base';
import React from 'react';
import {useForm} from 'react-hook-form';
import {TNavigation} from '../../../../../../App';
import {
  dontHaveAccountText,
  formFieldNames,
  formProps,
  loginInUserText,
  loginText,
  signUpText,
  validationSchema,
} from './constants';
import {IFormInputs, IFormProps} from './types';
import TextInput from '../../../../../common/forms/TextInput';
import {StyleSheet} from 'react-native';

const SignUpLink: React.FC<{navigation: TNavigation}> = ({navigation}) => (
  <Flex flexDirection="row" justifyContent="flex-end">
    <Text>{dontHaveAccountText}</Text>
    <Text
      style={{
        color: 'blue',
        marginLeft: 4,
        textDecorationLine: 'underline',
      }}
      onPress={() => navigation.push('SignUp')}>
      {signUpText}
    </Text>
  </Flex>
);

const Form: React.FC<IFormProps> = ({onSubmit, navigation, isLoading}) => {
  const {
    control,
    formState: {errors},
    getValues,
    resetField,
  } = useForm<IFormInputs>({
    mode: 'onBlur',
    defaultValues: formFieldNames,
    resolver: yupResolver(validationSchema),
  });

  const onLocalSubmit = () => onSubmit(getValues(), resetField, 'password');

  return (
    <View>
      {formProps.map(({...rest}, key) => (
        <TextInput errors={errors} control={control} key={key} {...rest} />
      ))}
      <SignUpLink navigation={navigation} />
      <Button
        mode="contained"
        onPress={onLocalSubmit}
        style={styles.button}
        loading={isLoading}
        disabled={isLoading}>
        {loginText}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: '#0d6efd',
    marginTop: 10,
  },
});

export default Form;
