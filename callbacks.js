document.getElementById('button').addEventListener("click", () => {
    // console.log('button clicked');
    document.getElementById('result').textContent ="Callback executed after 5 seconds";
    document.getElementById('result').style.display = 'block';
    fetchData(displayData);
})

function fetchData(callback){
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(result => {
            callback(result);
        })
    }, 5000);
}

function displayData(result){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h2>Posts:</h2>";
    result.forEach(post => {
        resultDiv.innerHTML += `<p> ${post.title}</p>`
    }); 
}