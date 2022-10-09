import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h2>This is friends</h2>
            <p>Friend: {friends.length} </p>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}

                ></Friend>)
            }
        </div>
    );
};

export default Friends;