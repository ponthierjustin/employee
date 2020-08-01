import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <img alt={props.name} src={props.image}/>
            
        </div>
    );
};

export default UserCard;