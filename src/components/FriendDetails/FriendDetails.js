import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    return (
        <div>
            <h2>Details of friends</h2>
            <p>Name: {friend.name} </p>
            <p><small>Number: {friend.phone} </small></p>
        </div>
    );
};

export default FriendDetails;