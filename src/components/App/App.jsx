import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../AppCard';

const App = () => {
    const apps = useLoaderData()
    // console.log(data);
    return (
        <section>
            <div className='max-w-lg mx-auto text-center space-y-3 mb-10'>
                <h1 className='text-3xl font-bold capitalize'> Our all Apps</h1>
                <p className='text-gray-600'>
                    Explore all apps on the market developed by us. We code for millions.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 place-items-center'>
                {
                    apps?.map(app =>
                        <Link key={app.id} to={`/apps/${app?.id}`}>
                            <AppCard app={app}/>
                        </Link>
                    )
                }
            </div>
        </section>
    );
};

export default App;