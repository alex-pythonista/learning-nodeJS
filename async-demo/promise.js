const p = new Promise((resolve, reject) => {
    // some async work
    setTimeout(() => {
        resolve(0);
        reject(new Error('something went wrong'));
    }, 2000);
    
    
});

p.then(result => console.log(result)).catch(err => console.log(err.message));