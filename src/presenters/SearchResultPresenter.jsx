import { observer } from "mobx-react-lite";
import SearchResultView from "../views/SearchResultView";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import model from '../IngredientsModel';

import recipe from '/src/assets/recipe717040.json';

export default observer(
function SearchResultPresenter(props) {
    const navigate = useNavigate();
    function navigateToSearchACB() {
        navigate('/search'); 
    }
    function navigateToDetailsACB() {
        //**This is where the data is */
        model.searchResultsPromiseState = {
            promise: 'foo',
            error: null,
            data: recipe,
          }
        navigate('/detail'); 
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
                                 navigateToDetails={navigateToDetailsACB}
                                 />
            </div>
         )
    }
}
)