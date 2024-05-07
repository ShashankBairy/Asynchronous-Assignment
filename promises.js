document.getElementById('button').addEventListener('click', () => {
    document.getElementById('result').textContent = 'Loading...';
    document.getElementById('result').style.display = 'block';
    // fetchDataFromAPI(displayData);
    fetchData().then(result => displayData(result))
    .catch(error =>{
        console.log(error);
        document.getElementById('result').textContent = "Error fetching data. Please try again";
    }
    )

})

function fetchData(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                if(!response.ok){
                   throw new Error ('Network response was not ok');
                }
                return response.json()
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            })
        }, 5000)
    });
}


function displayData(result){
     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = "<h2>Posts:</h2>";
     result.forEach(post => {
         resultDiv.innerHTML += `<p> ${post.title}</p>`
     }); 
}