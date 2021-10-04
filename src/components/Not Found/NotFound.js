import React from 'react';

const NotFound = () => {
    return (
        <div className="mb-5 mt-5">

            {/* Page not found area */}
            <p className="fw-bolder" style={{ fontSize: '6rem' }}> <span className="text-muted">404</span> </p>
            <p className="fw-bolder" style={{ fontSize: '2rem' }}><span className="text-muted">OPPS!PAGE NOT FOUND</span></p>
            <p>Sorry, the page you are looking for doesn't exist.If you think <br /> something is broken,report a problem</p>
        </div>
    );
};

export default NotFound;