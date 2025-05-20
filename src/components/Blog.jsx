import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Link } from './icons/Icons';

const Blog = ({ blog }) => {
    if (!blog) return null;

    const { img, check_now, description, style = { shadow: "shadow-gray-500", cover: "from-gray-500" } } = blog;

    return (
        <Card className={`p-1 ${style.shadow}`}>
            <div className="group relative rounded-md cursor-pointer">
                <img src={img} alt="Blog-Image" width="auto" height="auto" loading='lazy' title="Blog" className='rounded-t-md ' />
                <CardHeader text={description} />
            </div>
            <div className='flex justify-center items-center rounded-b-md'>
                <BlogsLink name="Check Here" style={"rounded-br-md " + style.cover} link={check_now} />
            </div>
        </Card>
    );
}

export default Blog;

const BlogsLink = ({ name, link, style }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer"
            className={`w-[100%] py-3 text-center text-xl bg-black hover:bg-gradient-to-t cursor-pointer ${style} to-black duration-500 flex justify-center items-center text-white`}>
            <Link /> <span className='pl-2'>{name}</span>
        </a>
    );
}
