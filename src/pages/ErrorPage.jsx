import React from 'react';
import Banner from '../components/shared/Banner';

const ErrorPage = () => {
    const pageName = "404";
    const text = "Oops, Page Not Found!"
    return (
        <>
            {/* ==== Banner Section ==== */}
            <Banner pageName={pageName} text={text} />
        </>
    );
};

export default ErrorPage;