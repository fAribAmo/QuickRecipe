
import React from 'react';
import NavigationBar from './NavigationBarView';

function SearchDetailsView(props) {
  function navigateBackToResultsCB() {
    props.navigateToResult();
  }

  return (
    <div className='HomePage'>
      <NavigationBar />
      <button onClick={navigateBackToResultsCB} className='backToSearchButton'>
        Back to Search
      </button>
      <div className='container'>
        <div className='image-section'>
          <div className='placeholder-image'></div>
        </div>
        <div className='content-section'>
          <div className='title'>Title of the recipe</div>
          <div className='description'>Description of the dish</div>
        </div>
      </div>
      <div className='additional-sections'>
        <div className='section-left'>
          {/* Content for the left section (30% width) */}
        </div>
        <div className='section-right'>
          {/* Content for the right section (70% width) */}
        </div>
      </div>
    </div>
  );
}

export default SearchDetailsView;