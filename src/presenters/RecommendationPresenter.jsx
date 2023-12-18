
import { observer } from "mobx-react-lite";
import React from 'react';
import RecommendationView from "../views/RecommendationView";



export default observer(
    function RecommendationPresenter(props) {
        const state = props.model.recommendationPromiseState;
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