import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <section>
            navbar
            <Outlet/>
            footer
        </section>
    );
};

export default Root;