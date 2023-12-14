import { observer } from "mobx-react-lite";
import AboutPageView from "../views/AboutPageView";
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default 
observer(
function AboutPagePresenter(){
    return(
        <div>
            <AboutPageView />
        </div>
    );
}
)