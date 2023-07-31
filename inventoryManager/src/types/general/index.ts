import {IToastProps, useToast} from 'native-base';

export type TLooseObject = Record<string, unknown>;

export type TUseToast = ReturnType<typeof useToast>
export type TSection = {
  name: string;
  icon: string;
};
