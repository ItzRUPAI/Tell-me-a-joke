let jokes = [
    "Why don’t programmers like nature? It has too many bugs.",
    "Why did the computer get cold? Because It forgot to close its Windows.",
    "Why was the JavaScript developer sad? Because he didn’t know how to 'null' his feelings.",
    "Why do Java developers wear glasses? Because they don’t C#.",
    "Why did the student eat his homework? Because the teacher said it was a piece of cake."
];

function tellJoke() {
    let randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("jokeBox").innerText = jokes[randomIndex];
}
