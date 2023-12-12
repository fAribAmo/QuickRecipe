
import { observer } from "mobx-react-lite";
import SearchResultView from "../views/SearchResultView";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import SearchDetailsView from "../views/SearchDetailsView";



export default observer(
    function SearchDetailsPresenter(props) {

        const navigate = useNavigate();
        function navigateToResultsACB() {
            navigate('/result'); 
        }
             return (
                <div>
                    <SearchDetailsView navigateToResult={navigateToResultsACB} />
                </div>
             )
        }
    
    )