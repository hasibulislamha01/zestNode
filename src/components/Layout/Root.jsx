import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Navbar';
import GlobalSpinner from '../GlobalSpinner';
import Footer from '../Footer';

const Root = () => {
    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)
    return (
        <section>
            <Navbar />

            <div className='mt-10 mb-20'>
                {isNavigating ? <GlobalSpinner /> : <Outlet />}
                
            </div>

            <Footer/>
        </section>
    );
};

export default Root;