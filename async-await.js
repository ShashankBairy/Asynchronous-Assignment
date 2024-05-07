document.getElementById('button').addEventListener('click', async () =>{
    document.getElementById('result').textContent = "Loading...";
    document.getElementById('result').style.display = 'block';
    try{
        const result = await fetchData();
        displayData(result);
    }
    catch(error){
      console.error(error);
      document.getElementById('result').textContent = "Error fetching data.";
    }

})

 async function fetchData (){
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

function displayData(result){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h2>Posts:</h2>";
    result.forEach(post => {
        resultDiv.innerHTML += `<p> ${post.title}</p>`
    });
}
