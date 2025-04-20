import React from 'react'

const SectionHeading = ({ heading,secondHeading }) => {
    return (
        <div className="pb-8 text-white">
            {secondHeading && <p className='py-6 text-3xl font-bold text-start mb-8 text-gray-300'>
                {secondHeading}
            </p>}
        </div>
    )
}

export default SectionHeading;
