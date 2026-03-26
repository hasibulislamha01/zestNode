import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../AppCard';
import GlobalSpinner from '../GlobalSpinner';

const notFound = "/assets/App-Error.png"

const App = () => {
    const apps = useLoaderData()

    const [filtered, setFiltered] = useState(apps)
    const [loading, setLoading] = useState(false)

    const handleChange = (value) => {
        setLoading(true)
        const query = value.toLowerCase()
        const filteredApps = apps?.filter(app => app.title.toLowerCase().includes(query))
        setFiltered(filteredApps)
        setLoading(false)
    }
    return (
        <section className='container mx-auto px-2'>
            <div className='max-w-lg mx-auto text-center space-y-3 mb-10'>
                <h1 className='text-3xl font-bold capitalize'> Our all Apps</h1>
                <p className='text-gray-600'>
                    Explore all apps on the market developed by us. We code for millions.
                </p>
            </div>

            <div className='flex justify-between font-semibold mb-5'>
                <h4>Found {filtered?.length} apps</h4>
                <input
                    className='input rounded-sm w-48 h-8'
                    type="text"
                    placeholder='Search Apps'
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>

            {
                !loading ?
                    <div>
                        {
                            filtered?.length ?
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 place-items-center'>
                                    {
                                        filtered?.map(app =>
                                            <Link key={app.id} to={`/apps/${app?.id}`}>
                                                <AppCard app={app} />
                                            </Link>
                                        )

                                    }
                                </div>
                                :
                                <div className='w-full flex flex-col items-center justify-center gap-10'>
                                    <img src={notFound} alt="app not found" />
                                    <h2 className='text-2xl font-medium text-purple-800'>Sorry, We could not found the app you are looking for. 😅</h2>
                                </div>
                        }
                    </div> :
                    <GlobalSpinner />
            }
        </section>
    );
};

export default App;