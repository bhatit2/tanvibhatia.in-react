import React, { Component } from 'react';
import Card from '../layout/Card';
import '../../styles/components/blogs.scss';

const Blogs = ({ blogs }) => {
    return (
        <section id="blog">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Blogs</h2>
                    </div>
                    {blogs.map((blog, index) => (
                        <div key={index} className="col-4">
                            <Card blog={blog} />
                        </div>
                    )
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default Blogs;