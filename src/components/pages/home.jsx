import React from 'react';
import { Image } from 'react-bootstrap';

const Home = () => {
    return (
        <React.Fragment>
            <section className="bg-red">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-6 text-white m-auto">
                                <h1>Effective Growth-Driven Approach To Digital Marketing</h1>
                                <p>From strategy development to high-conversion digital marketing campaigns, the Marketing Media Cloud (MMC) team is here to help you set-up your marketing needs at a fraction of the usual cost.</p>
                                <button type="button" className="btn btn-outline-light">DISCOVER THE INBOUND STRATEGY</button>
                            </div>
                            <div className="col-md-6 m-auto text-center">
                                <Image src="https://marketingmediacloud.com/wp-content/uploads/2017/07/Marketing-Media-Cloud-Connected-Growth-Driven-Services.png" fluid />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-12 pt-5 pb-5 text-center">
                                <h2>RESULTS-DRIVEN INBOUND MARKETING APPROACH</h2>
                            </div>
                            <div className="col-md-6 m-auto text-center " >
                                <Image src="https://marketingmediacloud.com/wp-content/uploads/2018/08/Academy_Badge_certifiedpartner-left-aligned-stacked-dark.png" fluid />
                            </div>
                            <div className="col-md-6 color-white m-auto text-dark">
                                <p>Marketing Media Cloud (MMC) is Davao’s first Inbound Marketing Certified Agency by the international inbound marketing and sales platform, HubSpot.</p>
                                <p>Whether your business is in Davao City or in other regions of the Philippines and even in a foreign country, MMC can help small and medium-sized enterprises (SMEs) about how to do the right inbound marketing approach.</p>
                                <p>We specialise in search engine marketing, digital advertising and online business development which are custom-planned for your business to capture the right leads at the right time and the right place, all the time.</p>
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
                                <h2>OUR DIGITAL BUSINESS SOLUTIONS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-6 text-black m-auto">
                                <h2>Marketing Consultation</h2>
                                <p>With our sales, marketing and website development experiences, we can provide better techniques and service plans that will significantly aid in the further growth and development of your business. We don’t just settle for providing only the conventional type of business solutions. We can tailor fit whatever online solutions it may offer to our clients.</p>
                                <button type="button" className="btn btn-outline-light">DISCOVER THE INBOUND STRATEGY</button>
                            </div>
                            <div className="col-md-6 m-auto text-center">
                                <Image src="https://marketingmediacloud.com/wp-content/uploads/2017/07/socail-m3.png" fluid />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        
        );
    
}
 
export default Home;