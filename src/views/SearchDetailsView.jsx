import NavigationBar from './NavigationBarView';

function SearchDetailsView(props) {
    function navigateBackToSearchCB() {
        props.navigateBackToSearch();
     }
    return(
        <div className="HomePage">
              <div><NavigationBar /></div>
              <div><button onClick={navigateBackToSearchCB}
                     className='backToSearchButton'
               >
               Back to Search
            </button></div>
              
        </div>
    );
}
export default SearchDetailsView;