import { observer } from "mobx-react-lite";
import ContactPageView from "../views/ContactPageView";
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