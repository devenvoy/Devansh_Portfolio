import React from 'react';
import blogs from '../data/blogs';
import Blog from '../components/Blog';

const Blogs = () => {
    return (
        <div id="blogs" className='pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-black via-black to-gray-900 text-white'>
            <div className='section'>
                <h2 className="text-3xl font-bold text-start mb-8 text-gray-300">Check Out Some of my blogs</h2>
                <GridLayout style="sm:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3">
                    {blogs.map((blog) => {
                        return (
                            <Blog key={blog.name} blog={blog} />
                        );
                    })}
                </GridLayout>
            </div>
        </div>
    );
}

export default Blogs;
