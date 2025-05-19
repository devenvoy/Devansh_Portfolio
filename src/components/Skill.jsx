import React from 'react';
import Card from './Card';

const Skill = ({ skill: { style, name, icon } }) => {
    return (
        <Card style={style}>
            <div className="relative group rounded-md w-full h-24 bg-black bg-opacity-40 flex flex-col items-center justify-center overflow-hidden duration-500">

                {/* Gradient background that appears on hover */}
                <div className={`absolute inset-0 ${style.cover} opacity-0 group-hover:opacity-100 transition-all duration-300 z-0`} />

                {/* Content always above gradient */}
                <div className="z-10 flex flex-col items-center justify-center text-white">
                    <div className="mb-1">{icon}</div>
                    <p className="text-xs text-center line-clamp-2 w-24">{name}</p>

                </div>
            </div>
        </Card>
    );
};

export default Skill;
