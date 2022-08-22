import React from 'react';
import copyrightSymble from "../../../assets/img/Copyright-Symbol (1).png"

const CopyrightFooter = () => {
    return (
        <div className='copyright-footer-section'>
            <div className='container'>
               <img src={copyrightSymble} alt="copyrightSymble"/> <small> Copyright 2022, All rights reserved by Parcel Star</small>
            </div>
        </div>
    );
};

export default CopyrightFooter;