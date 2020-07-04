document.getElementById("button").addEventListener("click", function changeQuote() {
  let randomNumber = Math.floor(Math.floor(1643) * Math.random());
  fetch("https://type.fit/api/quotes")
    .then(response => {
      return response.json();
    })
    .then(response => {
      let allQuotes = response[randomNumber];
      document.getElementById("quote").textContent = allQuotes.text;
      document.getElementById("author").textContent = allQuotes.author;
    })
});