import React from 'react';

const AppCard = ({app}) => {
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
                    <div className="">{app?.ratingAvg}</div>
                    <div className="">{app?.downloads}</div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;