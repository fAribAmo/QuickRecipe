import { observer } from "mobx-react-lite";
import ContactPageView from "../views/ContactPageView";
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default 
observer(
function ContactPagePresenter(){


    return(
        <div>
            <ContactPageView />
        </div>
    );
}
)