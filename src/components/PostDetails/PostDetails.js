import React from 'react';
import { Link } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = ({post}) => {
    const {title, body, id} = post
    return (
        <div className='post-details'>
            <h4>Title: {title} </h4>
            <p>Body: {body} </p>
            <Link to={`post/${id}`}>
            show
            </Link>
        </div>
    );
};

export default PostDetails;