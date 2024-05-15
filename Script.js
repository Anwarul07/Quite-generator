console.log("Quite can change your life ");

const quite = document.getElementById("quite");
const author = document.getElementById("author");
const api = "https://api.quotable.io/random";
async function getquite(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quite.innerHTML= data.content;
    author.innerHTML= data.author;
}

getquite(api);