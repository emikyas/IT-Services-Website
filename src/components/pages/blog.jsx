import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Section from '../common/sections';
// import Section from './../common/sections';

class Blog extends Section {
    state = {
        posts: [
            {
                id: 1,
                title: 'Lorem Ipsum',
                content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                editor: {
                    firstName: 'Jan',
                    lastName: 'Vallno',
                },
                image: 'https://apiar.org.au/wp-content/uploads/2014/10/400x400.gif',
                datePublished: '2021-06-01T14:18:28+0000'
            },
            {
                id: 2,
                title: 'Lorem Ipsum',
                content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                editor: {
                    firstName: 'Jan',
                    lastName: 'Vallno',
                },
                image: 'https://apiar.org.au/wp-content/uploads/2014/10/400x400.gif',
                datePublished: '2021-06-01T14:18:28+0000'
            },
            {
                id: 3,
                title: 'Lorem Ipsum',
                content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                editor: {
                    firstName: 'Jan',
                    lastName: 'Vallno',
                },
                image: 'https://apiar.org.au/wp-content/uploads/2014/10/400x400.gif',
                datePublished: '2021-06-01T14:18:28+0000'
            },
            {
                id: 4,
                title: 'Lorem Ipsum',
                content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                editor: {
                    firstName: 'Jan',
                    lastName: 'Vallno',
                },
                image: 'https://apiar.org.au/wp-content/uploads/2014/10/400x400.gif',
                datePublished: '2021-06-01T14:18:28+0000'
            }
        ]
     }
    render() { 
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="row">
                                <div className="col-md-12 text-black m-auto">
                                    <h1>Marketing Media Cloud Blog Posts, News and Events</h1>
                                    <div className="row">
                                        {this.renderCard(this.state.posts, 4)}
                                        {/* <div className="col-md-4">
                                            <div className="card">
                                                <Image src="https://www.ccia-net.com/wp-content/uploads/2016/10/400x400-image.jpg" fluid></Image>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <Image src="https://www.ccia-net.com/wp-content/uploads/2016/10/400x400-image.jpg" fluid></Image>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <Image src="https://www.ccia-net.com/wp-content/uploads/2016/10/400x400-image.jpg" fluid></Image>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
         );
    }
}
 
export default Blog;