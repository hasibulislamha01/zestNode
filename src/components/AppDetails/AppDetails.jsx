import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const params = useParams()
    const appId = Number(params.id)
    const apps = useLoaderData()
    const app = apps?.find(app => app.id === appId)
    // console.log(app, apps, typeof appId);
    return (
        <section>
            app details here {app.title} 
        </section>
    );
};

export default AppDetails;