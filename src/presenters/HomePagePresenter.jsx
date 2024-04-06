import { observer } from "mobx-react-lite";
import HomePageView from "../views/HomePageView";
import { useNavigate } from 'react-router-dom';
import React from 'react';



export default 
observer(
function HomePagePresenter(){
    const navigate = useNavigate();
  
    function navigateToSearchACB (){
      navigate('/search'); // Use the navigate function to change the route
    };
    
    return(
        <div>
            <HomePageView navigateToSearch={navigateToSearchACB}/>
        </div>
    );
}
)