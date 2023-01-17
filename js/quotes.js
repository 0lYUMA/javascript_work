const quotes = [
    {
        quote: "Dreams come true. Without that possibility, nature would not incite us to have them.",
        author: "John Updike",
    },
    {
        quote: "Whoso neglects learning in his youth, loses the past and is dead for the future.",
        author: "Euripides",
    },
    {
        quote: "Failure is a detour; Not a dead-end street.",
        author: "Zig Ziglar",
    },
    {
        quote: "It is not God's will merely that we should be happy, but that we would make ourselves happy.",
        author: "Kand",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "Carol Burnett",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 