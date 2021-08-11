const quotes = [
    {
        quote: "Good!",
        author: "subin"
    },
    {
        quote: "Cool!",
        author: "sujin"
    },
    {
        quote: "Nice!",
        author: "sumin"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = `${quotes[Math.floor(Math.random() * quotes.length)].quote}`;
author.innerText = `${quotes[Math.floor(Math.random() * quotes.length)].author}`;