import React from 'react';
import Joi from 'joi-browser';
import Form from './../common/form';

class Contact extends Form {
    state = {
        data: {
            completeName: '',
            email: '',
            company: '',
            siteLink: '',
            comments: ''
        },
        errors: { }
    };
    schema = {
        id: Joi.string(),
        completeName: Joi.string().required().label('Complete Name'),
        email: Joi.string().email({ tlds: {allow: false} }).required().label('Email'),
        company: Joi.string().required().label('Company Name'),
        siteLink: Joi.string().uri().required().label('Website Url'),
        comments: Joi.string().required().label('Comment')
}
    render() { 
        return (
            <form className="row g-3" onSubmit={this.handleSubmit}>
                {this.renderInput('completeName', 'Complete Name')}                                        
                {this.renderInput('email', 'Email')}
                {this.renderInput('company', 'Company')}
                {this.renderInput('siteLink', 'Website')}
                {this.renderInput('comments', 'Comment')}
                {this.renderButton('Save')}
            </form>
        );
    }
}
 
export default Contact;