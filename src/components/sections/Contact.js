import React, { Component } from 'react';

const Contact = () => {

    return (
        <section id="contact">
            <div className="card">
                <div className="card-body">
                    <h3 className="section-title">Keep in touch with me</h3>
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea className="form-control" id="message" placeholder="Enter your message"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;