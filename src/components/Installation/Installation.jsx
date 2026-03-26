import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const download = "/assets/icon-downloads.png"
const star = "/assets/icon-ratings.png"
const notFound = "/assets/App-Error.png"

const Installation = () => {

    const installedApps = JSON?.parse(localStorage.getItem("installed"))
    const [installed, setIsInstalled] = useState(installedApps)
    const unInstallApp = (appId) => {
        const filtered = installed?.filter(app => app.id !== appId)
        localStorage.setItem("installed", JSON.stringify(filtered))
        setIsInstalled(filtered)
        toast.success("Successfully Uninstalled")
    }

    return (
        <section className='min-h-screen container mx-auto space-y-20'>
            <div className='text-center space-y-3'>
                <h1 className='text-3xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-700'>
                    Explore all trending apps on the market developed by us.
                </p>
            </div>

            <div className='px-2 max-w-245 mx-auto space-y-10'>
                <div className='flex justify-between'>
                    <h4 className='text-lg font-semibold text-gray-600'>Found {installedApps?.length || 0} Apps</h4>
                    <p>Sort</p>
                </div>

                <div className='flex flex-col gap-5'>
                    {
                        installed?.length ?
                            installed?.map(app =>
                                <div key={app?.id} className="card card-side bg-base-100 shadow-sm p-5">

                                    <div className="w-full flex items-center justify-between">
                                        <div className='flex items-center gap-4'>
                                            <img src={app.image} alt={app.title} className='h-16 w-16 rounded-md' />
                                            <div className='space-y-2'>
                                                <h2 className="card-title">{app.title}</h2>
                                                <div className='flex items-center gap-10'>
                                                    <div className='flex items-center gap-2'>
                                                        <img src={download} alt="download" className='h-4 w-4' />
                                                        <h6 className='font-medium text-gray-700 text-sm'>{app?.downloads / 1000000}M</h6>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <img src={star} alt="download" className='h-4 w-4' />
                                                        <h6 className='font-medium text-gray-700 text-sm'>{app?.ratingAvg}</h6>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <h6 className='font-medium text-gray-700 text-sm'>{app?.size} MB</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button onClick={() => unInstallApp(app?.id)} className="btn btn-primary">Uninstall</button>

                                    </div>
                                </div>
                            ) :
                            <div className='w-full flex flex-col items-center justify-center gap-10'>
                                <img src={notFound} alt="app not found" />
                                <h2 className='text-2xl font-medium text-purple-800'>Sorry, We could not found the app you are looking for. 😅</h2>
                            </div>
                    }
                </div>
            </div>
            <Toaster/>
        </section>
    );
};

export default Installation;