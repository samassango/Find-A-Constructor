import React from 'react';
import AppLayout from '../../containers/AppLayout';
import './style.css'
const Services: React.FC = () => {
    return(<AppLayout>
        <div className='service-container'>
           <h1>Services</h1>
           <p>
            <ul>
                <li>We offer 24 hours support for pro accounts</li>
                <li>We offer 12 hours support for standard</li>
                <li>We deliver convience booking to Business Owner</li>
                <li>We offer a service to trigger payment after Entertainer checkIn to the Venue.</li>
            </ul>
           </p>
        </div>
        </AppLayout>)
}
export default Services;