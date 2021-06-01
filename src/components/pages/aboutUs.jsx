import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <React.Fragment>
            <section className="bg-red">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-12 text-white m-auto">
                                <h1>ABOUT THE MARKETING MEDIA CLOUD</h1>
                                <p>Marketing Media Cloud is a team composed of sales, marketing and website development professionals who came along together to talk about their various fields of expertise across the digital marketing landscape. Their combined experiences aimed to results-driven, end-to-end digital marketing solutions - the result of nearly 80 years of combined experience - caters to the needs of small and medium enterprises (SMEs) from the local Davao market to other regions in the Philippines and even abroad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-12 text-black text-center m-auto">
                                <h2>OUR STORY</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-red">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-12 text-white text-center m-auto">
                                <Image src="https://marketingmediacloud.com/wp-content/uploads/2018/07/png_only_for_presentation-300x300.png" fluid />
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
                                <p>Start-ups, small and medium businesses have been struggling to find the right digital marketing agency that will bring their establishments to the right audience. In 2016, a team of dedicated virtual assistants never thought to become one of the trusted digital marketing agencies in Davao City, Philippines and abroad.</p>
                                <p>Before becoming known as Marketing Media Cloud (MMC), the digital marketing team started off as <Link to="http://1seocenter.com/">1SEOCenter.com</Link> in tandem with <Link to="http://www.filipinowebmasters.com/">Filipino Webmasters</Link>. To further expand the team’s services, Chito Marco Lucero, who is the CEO of IdeaHub IT Solutions Provider, Inc., and Stanley Dumanig, the founder of Filipino Webmasters formed the Marketing Media Cloud team and became its digital marketing arm.</p>
                                <p>In the process, MMC has partnered with inbound marketing agencies in the United Kingdom and Australia. Their avant-garde approach to marketing made inbound methodology as MMC’s pillar for all digital services to clients. With intensive training and workshops of the inbound methodology, MMC is the first and currently HubSpot certified agency in Davao City, delivering world-class marketing services that are tailor-fit to the needs of the clients.</p>
                                <div className="text-center">
                                    <Image className="text-center" src="https://marketingmediacloud.com/wp-content/uploads/2018/08/Academy_Badge_certifiedpartner-left-aligned-stacked-dark.png" fluid />
                                </div>
                                <p>Once our vision to leverage our skills has become our mission by certifying our marketing schemes and provide the right marketing approach to the right customers, in the right channel and at the right time. Our aim is to bring effective digital marketing strategies to SMEs in Davao City, Southeast Asia and to the world.</p>
                                <p>With the combination of their unique expertise and success, MMC offers small and medium enterprises with a proven digital, business and marketing know-how at a fraction of the cost of building up your top-flight management team. Turbo-charging your business with MMC means making better business decisions, launching your brands further, and reaching your targets sooner.</p>
                                <p>We don’t just settle for providing only the conventional type of business solutions. We can tailor fit whatever online solutions it may offer to our clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
 
export default AboutUs;