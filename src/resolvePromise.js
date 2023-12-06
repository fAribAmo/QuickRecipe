

export default function resolvePromise(prms, promiseState) {
    
    promiseState.promise= prms;
    promiseState.data = null;
    promiseState.error = null;

    function dataACB(data) {
        if(promiseState.promise === prms){
            promiseState.data = data; 
        }
    } 
    
    function errorACB(error) {
        promiseState.error = error;
    }
    
    if(prms != null){
        prms.then(dataACB).catch(errorACB);
    }
}
