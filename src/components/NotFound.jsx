import React from 'react';
import { useNavigate } from 'react-router';

const notFoundImage = "/assets/error-404.png"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-[70vh] flex flex-col items-center justify-center space-y-2'>
            <img src={notFoundImage} alt="page not found" />
            <h1 className='text-2xl font-semibold'>Looks like you are lost.</h1>
            <button onClick={() => navigate(-1)} className='btn  bg-linear-65 from-purple-800 to-purple-500 text-purple-100' >Get Back on track</button>
        </div>
    );
};

export default NotFound;