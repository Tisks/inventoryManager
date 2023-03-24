import { IToastProps } from "native-base";

export type TLooseObject = Record<string, unknown>;

export type TUseToast = {
  show: (props: IToastProps) => any;
  close: (id: any) => void;
  closeAll: () => void;
  isActive: (id: any) => boolean;
};


export type TSection = {
  name: string;
  icon: string;
  
}