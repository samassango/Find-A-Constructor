import React from 'react';
import AppLayout from '../../containers/AppLayout';
import './style.css'
const FallBackPage: React.FC<{serviceName:string}> = ({serviceName}) => {
    return(<AppLayout>
        <div className='fallback-container'>
           <h1>Error Page</h1>
           <p>
            {` Error: Fail to load ${serviceName}. Reported to the Support Team`}
           </p>
        </div>
        </AppLayout>)
}
export default FallBackPage;