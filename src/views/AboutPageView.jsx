import React, { useState } from 'react';
import NavigationBar from './NavigationBarView';

function AboutPageView (){
    return (
        <div className='HomePage'>
          <div><NavigationBar /></div>
          <h1>About Us</h1>
        </div>
    );        
};
   
export default AboutPageView;
