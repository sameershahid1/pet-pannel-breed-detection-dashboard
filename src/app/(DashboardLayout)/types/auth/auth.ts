import { FormErrorType } from "@/utils/type/form";

export interface registerType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  handleSubmit: (evt: any) => Promise<void>;
  error: FormErrorType;
}

export type loginType = {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  handleSubmit: (evt: any) => Promise<void>;
  error: FormErrorType;
}

export interface signInType {
  title?: string;
}
