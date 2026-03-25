import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Navbar';
import GlobalSpinner from '../GlobalSpinner';

const Root = () => {
    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)
    return (
        <section>
            <Navbar />

            <div className='mt-10'>
                {isNavigating ? <GlobalSpinner /> : <Outlet />}
                
            </div>

            footer
        </section>
    );
};

export default Root;