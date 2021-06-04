import React from 'react';
import Contact from '../common/contact';
import Form from './../common/form';

class ContactUS extends Form {
    render() { 
        return (
            <section>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-12 text-black m-auto">
                                <h1>CONTACT US</h1>
                                <Contact />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default ContactUS;