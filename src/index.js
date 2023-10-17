if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(registration =>{
        console.log("SW REGISTERED  !");
        console.log(registration);
    }).catch(error => {
        console.log("SW REGISTRATION FAILED   !");
        console.log(error);
    });
} 