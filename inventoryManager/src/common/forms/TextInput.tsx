import {Caption, TextInput as PaperTextInput} from 'react-native-paper';
import React, {PropsWithChildren} from 'react';
import {Controller, ControllerProps} from 'react-hook-form';

export type TInput = 'text' | 'password';
export interface ITextInputProps {
  label: string;
  value: string;
  isRequired?: boolean;
  inputType?: TInput;
  errors: any;
  control?: any;
  controllerProps?: Omit<
    ControllerProps,
    'render' | 'name' | 'control' | 'errors'
  >;
  backgroundColor?: string;
}

export interface ITextInputFormProps
  extends Omit<ITextInputProps, 'errors' | 'controllerProps'> {}

const TextInput: React.FC<PropsWithChildren<ITextInputProps>> = ({
  label,
  value,
  errors,
  inputType,
  isRequired,
  control,
  controllerProps,
  children,
  backgroundColor = 'white',
}) => {
  return (
    <>
      <Controller
        render={({field: {onChange, onBlur, value}}) => (
          <PaperTextInput
            label={label}
            value={String(value)}
            onChangeText={val => onChange(val)}
            onBlur={onBlur}
            secureTextEntry={inputType === 'password'}
            error={value in errors}
            theme={{colors: {primary: 'blue'}}}
            style={{backgroundColor}}
          />
        )}
        name={value}
        control={control}
        {...controllerProps}
      />
      <Caption>{errors[value]?.message}</Caption>
      {children}
    </>
  );
};

export default TextInput;
