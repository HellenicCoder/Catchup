const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copybtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

function randomQuote(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");

    })
}


soundBtn.addEventListener("click", () => {

    let utterence = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterence)
});

copybtn.addEventListener("click", () => {
   navigator.clipboard.writeText(quoteText.innerText)
});
quoteBtn.addEventListener("click", randomQuote);

twitterBtn.addEventListener("click", () => {
    let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(twitterUrl, "_blank");
 });
 twitterBtn.addEventListener("click", randomQuote);
 
