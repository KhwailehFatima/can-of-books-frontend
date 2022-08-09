import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const {isAuthenticated, user } = useAuth0();

    return isAuthenticated &&(
        <div> 
            <h1> Hello {user.name}</h1>
            <img src={user.picture} alt={user.name} />
            <p> {user.email} </p>
            <p> You are logged in. </p> 
        </div>
         
    )
         
}

export default Profile;