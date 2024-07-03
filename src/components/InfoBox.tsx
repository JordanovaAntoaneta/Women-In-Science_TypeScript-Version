import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const info = '"They broke the gender barriers and inspired more young women to pursue careers in science!"';

function InfoBox() {

    return (
        <div className='cent'>
            <div className='info'>
                <RiDoubleQuotesL /> {info} <RiDoubleQuotesR />
            </div>
        </div>
    );

}

export default InfoBox;