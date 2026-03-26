import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';
import { RatingChart } from '../Chart';

const download = "/assets/icon-downloads.png"
const star = "/assets/icon-ratings.png"
const like = "/assets/icon-review.png"

const AppDetails = () => {
    const params = useParams()
    const appId = Number(params.id)
    const apps = useLoaderData()
    const app = apps?.find(app => app?.id === appId)
    const [isInstalled, setIsInstalled] = useState(false)
    // console.log(app, apps, typeof appId);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("installed")) || []
        const alreadyInstalled = saved?.find(item => item.id === app.id)
        if (alreadyInstalled) { setIsInstalled(true) }
    }, [app.id])


    const saveToLocalStorage = (item) => {
        const saved = JSON.parse(localStorage.getItem("installed")) || []
        const newData = [item, ...saved]
        localStorage.setItem("installed", JSON.stringify(newData))
    }

    const handleInstall = () => {
        if (isInstalled) return

        saveToLocalStorage(app)
        setIsInstalled(true)
        toast.success("App Installed Successfully")
    }

    return (
        <section className='container mx-auto'>
            {/* summary box */}
            <div className='flex flex-col md:flex-row items-center gap-10'>
                {/* image container */}
                <div className='h-80 w-80 rounded-lg border-2 border-dashed border-gray-300 p-5 bg-gray-50 flex items-center justify-center'>
                    <img src={app?.image} alt={app?.title} className='w-full h-full object-cover rounded-md' />
                </div>
                {/*  */}
                <div className='flex-1 h-80 pl-8 py-5 flex flex-col justify-evenly rounded-lg border-2 border-dashed border-gray-300 bg-gray-50'>

                    <div className='pb-3 space-y-1 border-b border-gray-300'>
                        <h1 className='text-3xl font-bold'>{app?.title}</h1>
                        <p className='font-semibold text-gray-600'>Developed by: <span className='text-purple-700 '>{app?.companyName}</span></p>
                    </div>

                    <div className='flex flex-wrap items-center gap-10 lg:gap-20 mb-2'>
                        <KpiStat
                            imageUrl={download}
                            subTitle={"Downloads"}
                            stat={`${app?.downloads / 1000000}M`}
                        />
                        <KpiStat
                            imageUrl={star}
                            subTitle={"Average Rating"}
                            stat={app?.ratingAvg}
                        />
                        <KpiStat
                            imageUrl={like}
                            subTitle={"Total Reviews"}
                            stat={`${parseInt(app?.reviews / 1000)}K`}
                        />
                    </div>
                    <button
                        onClick={() => handleInstall()}
                        disabled={isInstalled}
                        className='btn btn-primary w-60'>
                        {!isInstalled ?
                            `Install Now (${app?.size}MB)`
                            : "Installed"
                        }
                    </button>
                </div>
            </div>
            <div className='my-20'>
                <RatingChart ratingData={app?.ratings} />
            </div>
            {/* description */}
            <div className='space-y-3 mt-20'>
                <h4 className='font-bold text-lg'>Description</h4>
                <p>
                    {app?.description}
                </p>
            </div>
            <Toaster />
        </section>
    );
};

export default AppDetails;

const KpiStat = ({ imageUrl, subTitle, stat }) => {
    return (
        <div className='flex flex-col items-center'>
            <img src={imageUrl} alt='downloaded' />
            <p className='text-gray-700 font-medium'>{subTitle}</p>
            <h2 className='text-2xl font-bold'>{stat}</h2>
        </div>
    )
}
