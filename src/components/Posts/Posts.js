import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3>Details of post</h3>
            {
                posts.map(post => <PostDetails
                key={post.id}
                post={post}
                ></PostDetails> )
            }
        </div>
    );
};

export default Posts;