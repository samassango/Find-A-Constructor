import { FieldErrors, FieldValues, RegisterOptions, SubmitErrorHandler, SubmitHandler, UseFormRegisterReturn, useForm } from 'react-hook-form';

export interface IFormProps{
    register:(name: string, options?: RegisterOptions<FieldValues, string> | undefined) => UseFormRegisterReturn<string>;
    handleSubmit:(onValid: SubmitHandler<FieldValues>, onInvalid?: SubmitErrorHandler<FieldValues> | undefined) => (e?: React.BaseSyntheticEvent<any> | undefined) => Promise<any>;
    errors: FieldErrors<FieldValues>;
    onSubmitHandlerResponse: (data:FieldValues)=>void;
  }
