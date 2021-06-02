import React, { Component } from 'react';
import Card from './card';

class Section extends Component {
    state = {
        posts: {}
     }
    renderCard(data, section) {
        return (
            <Card
                data={data}
                section={section}
            />
        );
    }
}
 
export default Section;