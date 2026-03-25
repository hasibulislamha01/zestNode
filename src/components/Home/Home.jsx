import React, { Suspense } from 'react';
import Trending from './Trending';
import { Link } from 'react-router';

const dataLoader = fetch("/data.json").then(res => res.json())
const mobile = "/assets/hero.png"

const Home = () => {
    return (
        <section>

            <div className='text-center mb-20 space-y-3'>
                <h1 className='text-5xl font-bold capitalize leading-14'>
                    We build
                    <br />
                    <span className='text-purple-700'>Productive </span>
                    Apps
                </h1>
                <div>
                    <p>
                        At velocity, we craft innovative appls designed to make everyday life simpler, smarter and more exciting.
                    </p>
                    <p>
                        Our goal is to turn your ideas into digital experiences that truely make an impact.
                    </p>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    
                    <Link to="https://play.google.com/store" target='_blank'>
                        <button
                            className='btn flex items-center'
                        >
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/022/484/501/non_2x/google-play-store-icon-logo-symbol-free-png.png"
                                alt="app store "
                                className='h-6 w-6'
                            />
                            Play Store
                        </button>
                    </Link>
                    <Link to="https://www.apple.com/app-store/" target='_blank'>
                        <button
                            className='btn flex items-center'
                        >
                            <img
                                src="https://www.apple.com/v/app-store/c/images/overview/icon_appstore__ev0z770zyxoy_large.png"
                                alt="app store "
                                className='h-6 w-6'
                            />
                            App Store
                        </button>
                    </Link>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <img src={mobile} alt="hero image" className='lg:w-1/2' />
            </div>
            <div className='space-y-10 py-14 text-purple-100 bg-radial-[at_50%_75%] from-purple-600 via-purple-700 to-purple-900 to-90%'>
                <h1 className='capitalize text-center text-3xl font-bold'>Trusted by millions, Built for you</h1>

                <div className='lg:max-w-[75%] mx-auto grid grid-cols-3 place-items-center'>
                    <div className='text-center space-y-1'>
                        <h6 className='text-sm'>Total Downloads</h6>
                        <h2 className='text-3xl font-bold'>
                            21.9M
                        </h2>
                        <p className='text-sm'>21% more that last month</p>
                    </div>

                    <div className='text-center space-y-1'>
                        <h6 className='text-sm'>Total Reviews</h6>
                        <h2 className='text-3xl font-bold'>
                            906K
                        </h2>
                        <p className='text-sm'>46% more that last month</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <h6 className='text-sm'>Active Apps</h6>
                        <h2 className='text-3xl font-bold'>
                            132+
                        </h2>
                        <p className='text-sm'>31 more will launch</p>
                    </div>

                </div>
            </div>

            <Suspense fallback={<div>Loading.....</div>}>
                <Trending loader={dataLoader} />
            </Suspense>
        </section>
    );
};

export default Home;