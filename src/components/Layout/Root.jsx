import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';

const Root = () => {
    return (
        <section>
            <Navbar />
            
            <div className='main'>
                <Outlet />
            </div>

            footer
        </section>
    );
};

export default Root;