
import { observer } from "mobx-react-lite";
import NavigationBar from '../views/NavigationBarView';
import SearchPageView from "../views/SearchPageView";
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default 
observer(
function NavigationBarPresenter(){
    return(
        <div>
            <NavigationBar />
        </div>
    );
}
)

