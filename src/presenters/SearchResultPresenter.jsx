import { observer } from "mobx-react-lite";
import SearchResultView from "../views/SearchResultView";
import { useNavigate } from 'react-router-dom';
import React from 'react';


export default observer(
function SearchResultPresenter(props) {
    const navigate = useNavigate();
    function navigateToSearchACB() {
        navigate('/search'); 
    }

    if(!props.model.searchResultsPromiseState.promise) {
        return <div><p>no data</p></div>;
    } else if (!props.model.searchResultsPromiseState.data && !props.model.searchResultsPromiseState.error) {
        return (
            <div>
                <img src="https://brfenergi.se/iprog/loading.gif" height="100"></img>
            </div>
        );
    } else if(props.model.searchResultsPromiseState.error) {
        return (
            <div>
                <p>
                    {props.model.searchResultsPromiseState.error}
                </p>
            </div>
        )
    } else {
         return (
            <div>
                <SearchResultView 
                                 recipes={props.model.searchResultsPromiseState.data}
                                 navigateBackToSearch={navigateToSearchACB}
                                 />
            </div>
         )
    }
}
)