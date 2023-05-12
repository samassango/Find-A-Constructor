import React from 'react'
import Header from '../../components/Header';
import './style.css'
const AppLayout: React.FC<any> =({ children })=>{
    return(
    <div className="app-container">
        <Header/>

        {/* <main> */}
            {children}
        {/* </main> */}

        <footer className="moving-footer">
            <div className="moving-content">
            <p><b>Support Contact:</b> (+27 72) 9632594.</p>
            <p><b>Support Email Address: </b>samassango@gmail.com.</p>
            <p>We promise nothing but great experience. We are on the same team.</p>
            </div>
        </footer>
    
    </div>
    )
}
export default AppLayout;