const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote");
const whatAppButton = document.getElementById("whatsApp-quote");
const facebookButton = document.getElementById("facebook-quote");


let quotes = [];
let currentQuote = {};

const fetchData = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    //console.log(data);
    quotes = data;
    getRandomQuote();
};

const getRandomQuote = () => {
   const index = Math.floor(Math.random() * quotes.length);
   currentQuote = quotes[index];
   renderQuote();
};

const renderQuote = ()=> {
    quoteText.textContent = `"${currentQuote.text}"`;
    let author = currentQuote.author.split(",")[0];
    quoteAuthor.textContent = `~ ${author}`;

};

const whatsAppQuote = () => {
    
    const whatsAppUrl = `https://wa.me/254702422547=${encodedURIComponent( `" ` + currentQuote.text + `" ` + (currentQuote.author ||  "Anonymous")
    )}`;

    window.open(whatsAppUrl, "_blank");
};

const facebookQuote = () => {
    const facebookUrl = `https://www.facebook.com/sammytransporter.daggy=${encodedURIComponent(
    window.location.href
    )}`;

    window.open(facebookUrl, "_blank");
};

newQuoteButton.addEventListener("click", getRandomQuote);
whatsAppButton.addEventListener("click", whatsAppQuote);
facebookButton.addEventListener("click", facebookQuote);

fetchData();
