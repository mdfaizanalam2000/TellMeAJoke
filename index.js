const url = "https://v2.jokeapi.dev/joke/Any?type=twopart&blacklistFlags=explicit";

async function getResponse() {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("title").innerHTML = data.setup;
    document.getElementById("body").innerHTML = data.delivery;
}

function onClick() {
    getResponse();
}