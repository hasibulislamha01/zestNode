import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';


const Trending = ({ loader }) => {
    const apps = use(loader)
    console.log(apps);
    const navigate = useNavigate()


    const trendingApps = apps?.sort((a, b) => b.ratingAvg - a.ratingAvg)?.slice(0, 8)
    // console.log("trenidng", trendingApps);

    return (
        <section>
            <div className='max-w-md mx-auto text-center space-y-2'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p>
                    Explore all trending apps on the market developed by us.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    trendingApps?.map(app =>
                        <Link to={`/apps/${app?.id}`} key={app.id}>
                            <div  className="card bg-base-100 shadow-sm">
                                <figure className='bg-gray-100 h-72'>
                                    <img
                                        src={app.image}
                                        alt={`${app.title} name`}
                                        className='object-cover rounded-lg my-5'
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {app.title}
                                    </h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-between">
                                        <div className="">{app.ratingAvg}</div>
                                        <div className="">{app.downloads}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            <button onClick={() => navigate("/apps")}>Show All</button>
        </section>
    );
};

export default Trending;