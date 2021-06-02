import _ from 'lodash';
import React, { Component } from 'react';
import Section from '../common/sections';
import Pagination from './../common/pagination';
import { paginate } from './../../utils/paginate';
import { getStaticPosts } from '../../services/staticPosts';

class Blog extends Section {
    state = {
        posts: getStaticPosts(),
        currentPage: 1,
        pageSize: 3,
    }
    
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    getPagedData = () => {
        const { pageSize, currentPage, posts: allPosts } = this.state;
    
        const filtered = allPosts.map(p => p);
        const posts = paginate(filtered, currentPage, pageSize);
        return { totalCount: filtered.length, data: posts };
        
    };
    render() {
        const {
            pageSize,
            currentPage,
        } = this.state;

        const { totalCount, data: posts } = this.getPagedData();
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="row">
                                <div className="col-md-12 text-black m-auto">
                                    <h1>Marketing Media Cloud Blog Posts, News and Events</h1>
                                    <div className="row">
                                        {this.renderCard(posts, 4)}
                                    </div>
                                    <Pagination
                                        itemsCount={totalCount}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={this.handlePageChange}
                                    />
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