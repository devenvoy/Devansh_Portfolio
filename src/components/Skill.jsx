import React from 'react';
import Card from '@mui/material/Card';

const Skill = ({ skill: { style, name, icon } }) => {
    return (
        <Card className={`p-1 ${style.shadow}`}>
            <div className="relative group rounded-md w-full h-30 bg-black bg-opacity-40 flex flex-col items-center justify-center overflow-hidden duration-500">
        
                <div className={`absolute inset-0 ${style.cover} opacity-0 group-hover:opacity-100 transition-all duration-300 z-0`} />

                <div className="z-10 flex flex-col items-center justify-center text-white">
                    <div className="mb-1">{icon}</div>
                    <p className="text-xs text-center line-clamp-2 w-24">{name}</p>

                </div>
            </div>
        </Card>
    );
};

export default Skill;
