import { observer } from "mobx-react-lite";
import SearchDetailsView from "../views/SearchDetailsView";
import { useNavigate } from 'react-router-dom';
import React from 'react';


export default 
observer(
function SearchDetailsPresenter(){
    const navigate = useNavigate();
  
    function navigateToDetailsACB (){
      navigate('/detail'); // Use the navigate function to change the route
    };
    
    return(
        <div>
            <SearchDetailsView navigateToSearch={navigateToSearchACB}/>
        </div>
    );
}
)