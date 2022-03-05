console.log('Before');
// getUser(1, displayUser);

// function displayUser(user) {
//     console.log(user);
//     // console.log(user);
//     getRepositories(displayRepositories);
// }

// function displayRepositories(repos) {
//     for(i in repos) console.log(repos[i]);
// }
// getUser(1)
//     .then(user => {
//         console.log(user);
//         getRepositories()
//             .then(repos => console.log(repos));
//     });
// getUser(1)
//     .then(() => getRepositories())
//     .then(repos => console.log(repos));

// Async and await approach

async function display() {
    const user = await getUser(1);
    const repos = await getRepositories();
    console.log(user);
    console.log(repos);
}
display();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
    

}

function getRepositories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('extracting repositories...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
        
}