let jokeTextEl = document.getElementById("jokeText")
let jokeBtnEl = document.getElementById("jokeBtn")
let spinnerEl = document.getElementById("spinner")


function jokeHttpRequest() {
    spinnerEl.classList.toggle("d-none")
    jokeTextEl.classList.toggle("d-none")

    fetch("https://apis.ccbp.in/jokes/random")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            spinnerEl.classList.toggle("d-none")
            jokeTextEl.classList.toggle("d-none")

            jokeTextEl.textContent = data.value;
        })
}
jokeBtnEl.addEventListener("click", jokeHttpRequest)