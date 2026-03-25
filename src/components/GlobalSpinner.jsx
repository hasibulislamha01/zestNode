import React from 'react';

const GlobalSpinner = () => {
    return (
        <div className='h-[80vh] flex flex-col items-center justify-center gap-3'>
            <span className="loading loading-spinner text-primary loading-xl"></span>
            Please Wait ....
        </div>
    );
};

export default GlobalSpinner;