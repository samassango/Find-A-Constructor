import React from 'react'
import './style.css'
import SignupForm from '../Signup';
import AppLayout from '../../containers/AppLayout';
import { useForm } from 'react-hook-form';
const RegisterPage:React.FC =()=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onCreateUser =(data:any)=>{
        console.log(data);
    }
    return( <AppLayout>
            <div className='reg-conatiner'>
                <SignupForm register={register} handleSubmit={handleSubmit} errors={errors} onSubmitHandlerResponse={onCreateUser} />
            </div>
        </AppLayout>)
}
export default RegisterPage;