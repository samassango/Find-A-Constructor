import React from 'react'
import './style.css'
import PasswordResetForm from '../UserReset';
import AppLayout from '../../containers/AppLayout';

const UserResetPage:React.FC =()=>{
    return( <AppLayout>
            <div className='user-conatiner'>
                <PasswordResetForm/>
            </div>
        </AppLayout>)
}
export default UserResetPage;