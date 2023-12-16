
import { observer } from "mobx-react-lite";
import SearchResultView from "../views/SearchResultView";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import SearchDetailsView from "../views/SearchDetailsView";



export default observer(
    function SearchDetailsPresenter(props) {
        const state = props.model.currentRecipePromiseState;
        const navigate = useNavigate();
        function navigateToResultsACB() {
            navigate('/result'); 
        }

        if(!state.promise){
            return <div><p>no data</p></div>;
        }else if(!state.data && !state.error){
            return (<div>
                <img src="https://brfenergi.se/iprog/loading.gif" height="100"></img>
                </div>
                );
        }else if(state.error){
            return (
                <div><p>{state.error}</p></div>
            )
        }else{
             return (
                <div>
                    <SearchDetailsView navigateToResult={navigateToResultsACB} 
                    recipeData={state.data} />
                </div>
             )
            }
        }
    
    )