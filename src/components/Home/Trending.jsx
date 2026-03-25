import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import AppCard from '../AppCard';


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
                            <AppCard app={app} />
                        </Link>
                    )
                }
            </div>
            <button className='btn' onClick={() => navigate("/apps")}>Show All</button>
        </section>
    );
};

export default Trending;