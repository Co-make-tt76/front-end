import React from 'react';
import {Jumbotron} from 'reactstrap'



const About = () => {
    return ( 
    
    <div> 
        <Jumbotron>
        <h1 className="display-3">Co|Make</h1>
        <p className="lead">
           <b>Make your voice heard in your community.</b> 
        </p>
        <hr className="my-2" />
        <p>
            Our goal is to make it easy for local governments to find out what they need to do to better serve their citizens. That's why we created a space for you to let your town know what they should be prioritizing. Post anytime, anywhere. Add a suggestion to someone else's issue. Discuss details in comments. Speak up and be heard.
        </p>
        <p>
           <b>Coming soon: </b> 
             Governement officials will be able to show official responses including the status of an issue. They will let you know if an issue is new, has been heard, is pending, is resolved, exactly what stage it's in, and how they're working on it.
        </p>
        <p>
            It's up to all of us to make our neighborhoods, our towns, and our cities better. Start by helping us find where to start.
        </p>
      </Jumbotron>

      <h2>Meet The Team </h2>
    </div>);
}
 
export default About;