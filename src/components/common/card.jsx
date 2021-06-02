import React from 'react';
import { Image } from 'react-bootstrap';
import { timeSince } from './../../utils/timeSince';

const Card = ({ data, section }) => {
    console.log('card data', data);
    return (
        <React.Fragment>
            {data.map(d => (
                <div key={d.id} className={`col-md-${section} mb-4`}>
                    <div className="card">
                        <Image src={`${d.image}`} fluid></Image>
                        <div className="card-body">
                            <h5 className="card-title">{ d.title }</h5>
                            <p className="card-text">{ d.content }</p>
                            <p className="card-text mb-0"><small className="text-muted">{`Published by: ${d.editor.firstName} ${d.editor.lastName}`}</small></p>
                            <p className="card-text"><small className="text-muted">{`Last updated ${timeSince(new Date(d.datePublished))} ago`}</small></p>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}
 
export default Card;