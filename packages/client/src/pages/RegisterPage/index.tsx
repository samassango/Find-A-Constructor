import React from 'react'
import './style.css'
import SignupForm from '../Signup';
import AppLayout from '../../containers/AppLayout';
const RegisterPage:React.FC =()=>{
    return( <AppLayout>
            <div className='reg-conatiner'>
                <SignupForm/>
            </div>
        </AppLayout>)
}
export default RegisterPage;