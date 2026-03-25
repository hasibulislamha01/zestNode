import React, { Suspense } from 'react';
import Trending from './Trending';

const dataLoader =  fetch("/data.json").then(res => res.json())    

const Home = () => {
    return (
        <section>

            <Suspense fallback={<div>Loading.....</div>}>
                <Trending loader={dataLoader} />
            </Suspense>
        </section>
    );
};

export default Home;