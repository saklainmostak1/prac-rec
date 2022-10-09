import React from 'react';
import './PostDetails.css'

const PostDetails = ({post}) => {
    const {title, body} = post
    return (
        <div className='post-details'>
            <h1>Title: {title} </h1>
            <p>Body: {body} </p>
            <button>Show Details</button>
        </div>
    );
};

export default PostDetails;