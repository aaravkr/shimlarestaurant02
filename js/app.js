(function () {
   

    if(!navigator.serviceWorker) return;
    
    navigator.serviceWorker.register('/sw.js').then(function(){
        console.log('registration worked');
    }).catch(function(){
        console.log('registration failed');
    });
    
})();
