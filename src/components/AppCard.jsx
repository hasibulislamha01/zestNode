import React from 'react';

const star = "/assets/icon-ratings.png"
const download = "/assets/icon-downloads.png"

const AppCard = ({ app }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='bg-gray-100 h-72'>
                <img
                    src={app?.image}
                    alt={`${app?.title} name`}
                    className='object-cover rounded-lg my-5'
                />
            </figure>
            <div className="card-body h-32 flex flex-col justify-evenly">
                <h2 className="card-title">
                    {app?.title}
                </h2>

                <div className="card-actions justify-between">
                    <div className="flex items-center gap-2">
                        <img src={star} alt="" className='w-4 h-4' />
                        {app?.ratingAvg}
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={download} alt="" className='w-4 h-4' />
                        {app?.downloads / 1000000} M
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;