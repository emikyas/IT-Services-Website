import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from './../common/form';
import Contact from '../common/contact';

class OurServices extends Form {
    state = {
        data: {
            completeName: '',
            email: '',
            company: '',
            siteLink: '',
            comments: ''
        },
        currentPage: 1,
        pageSize: 4,
        errors: {}
    }
    schema = {
            id: Joi.string(),
            completeName: Joi.string().required().label('Complete Name'),
            email: Joi.string().email({ tlds: {allow: false} }).required().label('Email'),
            company: Joi.string().required().label('Company Name'),
            siteLink: Joi.string().uri().required().label('Website Url'),
            comments: Joi.string().required().label('Comment')
    }
    
    validatePhoneNumber = () => {
        const validatePhoneNumber = Joi.extend(require('joi-phone-number'));
        return validatePhoneNumber.string().phoneNumber();
    }
    doSubmit = () => {
        // .... save to db 
        
        this.props.history.push('/'); //and redirect to home page
    };
    render() {
        const { errors } = this.state;

        return ( 
            <React.Fragment>
                <section className="bg-red">
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="row">
                                <div className="col-md-12 text-white m-auto text-center">
                                    <h1>INBOUND AND GROWTH-DRIVEN MARKETING</h1>
                                    <p>Now, that you’ve set up your business website, what would you do next with it? Is your business visible to your customers online at all? Well, there is an inbound marketing agency near you: Marketing Media Cloud. We can do an inbound digital marketing campaign right on your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
                <section className="">
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="row">
                                <div className="col-md-12 text-black m-auto">
                                    <p>You may ask, “why do I need to go inbound?” Inbound marketing is not only driven to help your business grow but also to make the right marketing approach at the right customers, the right time, the right channel, all the time. Inbound does NOT directly buy or sell email lists nor engage in cold-calling or interruptive marketing techniques. Gone are those days where traditional marketing agencies send out vague and non-personalized emails and flyers to people who don’t know about your business.</p>
                                    <p>We are now in a technology-driven world where marketers choose an updated, personalized and contextualized marketing approach to help visitors on your website become qualified leads, customers, and promoters. That is why we use inbound marketing aimed to attract the right strangers, to convert these strangers as the right leads, to close these leads as the right customers and to delight these customers as the right promoters of your business through a great, unique content all the time.</p>
                                    <p>Are you now looking for an inbound marketing agency near you? With our certified experience in handling inbound methodologies, we can combine these right on our specialised online marketing services: Search Engine Marketing, Digital Branding and Online Business Development. All these services form an integrated team of powerhouse marketers and developers who can help you manage the right online marketing campaign for your business. That’s why it’s time you go for inbound today.</p>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card border-light" style={{width: '18rem'}}>
                                                <Image src="https://marketingmediacloud.com/wp-content/uploads/2018/03/Marketing-Media-Cloud-Digital-Advertising-Services.png" className="card-img-top" fluid />
                                                <div className="card-body">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">SEO</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Email Marketing</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Paid Advertising</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Content Marketing</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Facebook Advertising</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Social Media Marketing</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card border-light" style={{width: '18rem'}}>
                                                <Image src="https://marketingmediacloud.com/wp-content/uploads/2018/03/Marketing-Media-Cloud-Digital-Advertising-Services.png" className="card-img-top" fluid />
                                                <div className="card-body">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Photography</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Video Creation</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Brand Marketing</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Corporate Identity</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Whiteboard Animation</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card border-light" style={{width: '18rem'}}>
                                                <Image src="https://marketingmediacloud.com/wp-content/uploads/2018/03/Marketing-Media-Cloud-Digital-Advertising-Services.png" className="card-img-top" fluid />
                                                <div className="card-body">
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Hosting</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Mobile Application</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Website Development</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Woocommerce Plugin</Link></li>
                                                        <li className="list-group-item border-0"><Link className="btn btn-outline-danger" to="#">Software Development</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
                <section className="bg-red">
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="row">
                                <div className="col-md-12 text-white m-auto text-center">
                                    <span>An inbound strategy is in constant change. Because of this, our team never stops learning and we practice whatever we learn. We are a growth-driven inbound marketing agency honed and trained in digital marketing strategies to help any industry from Philippines to international clients. With the Marketing Media Cloud team, your business is in the right hands.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
                <section>
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="row">
                                <div className="col-md-12 text-black m-auto">
                                    <p className="text-center">Our certified inbound and growth-driven specialists among others can work with you to fully optimise the power of an inbound strategy right for your business. Fill up the form below and contact us to discover what we can do today.</p>
                                    <p className="h2 pt-3 text-center">CONTACT AN INBOUND SPECIALIST NEAR YOU</p>
                                    <Contact />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
            );
    }
}

export default OurServices;