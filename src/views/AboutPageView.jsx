import React from 'react';
import NavigationBar from './NavigationBarView';

function AboutPageView() {
  return (
    <div className='HomePage'>
      <NavigationBar />

      <div className='AboutPage'>        
      <img src="/chef-hat.svg" alt="Chef's Hat" className="title-icon" />      
      <h1>About QuickRecipe</h1>

        <div className="content-container">

          <div className="project-description">
            <h2>Our Project</h2>
            <p>QuickRecipe was born out of a project for our Interaction Programming and Dynamic Web course, HT 2023, 
              in KTH Royal Institute of Technology in Stockholm. 
              Our goal was to create a user-friendly platform that simplifies the meal preparation process. 
              We focused on intuitive design and responsive features to ensure a seamless experience for users seeking quick and delicious meal solutions.</p>
            <p>As computer engineering students, we have combined our technical knowledge with our passion for accessible cooking, 
              crafting a web application that caters to busy lifestyles and diverse culinary interests.</p>
          </div>

          <div className="team-container">

            <h2>The Team</h2>
            <ul>
              {teamMembers.map(member => (
                <li key={member.name}>
                  <strong>{member.name}</strong> - {member.background}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );        
}

const teamMembers = [
  { name: 'Fariba Mohammadi', background: 'Computer Engineering Student' },
  { name: 'Munira Ahmed', background: 'Computer Engineering Student' },
  { name: 'Siyu Lu', background: 'Computer Engineering Student' },
  { name: 'Dipsikha Dutta', background: 'Computer Engineering Student' },
];

export default AboutPageView;
