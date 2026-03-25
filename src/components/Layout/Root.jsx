import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';

const Root = () => {
    return (
        <section>
            <Navbar />

            <div className='container mx-auto mt-10'>
                <Outlet />
            </div>

            footer
        </section>
    );
};

export default Root;