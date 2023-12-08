import React from 'react';
import NavigationBar from './NavigationBarView';

function SearchResultView(props){
    return (
      <div className='HomePage'>
         <div><NavigationBar /></div>
         <div>
            {props.recipes.map((recipe) => (
            <img src={recipe.image} height="100" key={recipe.id}>
            </img>
            ))}
         </div>
      </div>
      
    );
  };
  
  export default SearchResultView;