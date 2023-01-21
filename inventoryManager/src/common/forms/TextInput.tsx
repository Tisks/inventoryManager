import {FormControl, Input} from 'native-base';
import React, {type PropsWithChildren} from 'react';
import {Controller, ControllerProps} from 'react-hook-form';

export interface ITextInputProps {
  label: string;
  value: string;
  isRequired?: boolean;
  inputType?: 'text' | 'password';
  errors: any;
  rules: Record<string, unknown>;
  control?: any;
  controllerProps?: Omit<
    ControllerProps,
    'render' | 'name' | 'control' | 'errors'
  >;
}

export interface ITextInputFormProps
  extends Omit<ITextInputProps, 'errors' | 'controllerProps'> {
  children?: React.ReactNode;
}

const TextInput: React.FC<PropsWithChildren<ITextInputProps>> = ({
  label,
  value,
  rules,
  errors,
  inputType,
  isRequired,
  control,
  controllerProps,
  children,
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={value in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={val => onChange(val)}
            value={String(value)}
            type={inputType || 'text'}
          />
        )}
        name={value}
        rules={rules}
        control={control}
        {...controllerProps}
      />
      <FormControl.ErrorMessage>
        {errors[value].message}
      </FormControl.ErrorMessage>
      {children}
    </FormControl>
  );
};

export default TextInput;
