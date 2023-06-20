import React from 'react'
import './style.css'
import PasswordResetForm from '../UserReset';
import AppLayout from '../../containers/AppLayout';
import { useForm } from 'react-hook-form';

const UserResetPage:React.FC =()=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onCreateUser =(data:any)=>{
        console.log(data);
    }
    return( <AppLayout>
            <div className='user-conatiner'>
                <PasswordResetForm register={register} handleSubmit={handleSubmit} errors={errors} onSubmitHandlerResponse={onCreateUser} />
            </div>
        </AppLayout>)
}
export default UserResetPage;