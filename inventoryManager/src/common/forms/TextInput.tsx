import {FormControl, Input} from 'native-base';
import {ColorType} from 'native-base/lib/typescript/components/types';
import React, {type PropsWithChildren} from 'react';
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
  backgroundColor?: ColorType;
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
    <FormControl isRequired={isRequired} isInvalid={value in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={val => onChange(val)}
            value={String(value)}
            type={inputType || 'text'}
            backgroundColor={backgroundColor}
          />
        )}
        name={value}
        control={control}
        {...controllerProps}
      />
      <FormControl.ErrorMessage>
        {errors[value]?.message}
      </FormControl.ErrorMessage>
      {children}
    </FormControl>
  );
};

export default TextInput;
