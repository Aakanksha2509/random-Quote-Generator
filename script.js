let quoteBtn = document.querySelector("button");
let soundBtn = document.querySelector(".sound");
let copyBtn = document.querySelector(".copy");

let twitterBtn = document.querySelector(".twitter");
let quoteText = document.getElementsByClassName("quote")[0];

const url = "https://type.fit/api/quotes";

let changeQuote = () => {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            let random_index = Math.floor(Math.random() * item.length);
            quoteText.innerText = item[random_index].text;
            author.innerText = item[random_index].author;
            quoteBtn.innerText = "New Quote"
            quoteBtn.classList.remove("loading")
        });
};

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank");
});
