function changeQuote() {
  let randomNumber = Math.floor(Math.floor(1643) * Math.random());
  fetch("https://type.fit/api/quotes")
    .then(response => {
      return response.json();
    })
    .then(response => {
      let allQuotes = response[randomNumber];
      document.getElementById("quote").textContent = allQuotes.text;
      if (allQuotes.author === null || allQuotes.author === undefined) {
        document.getElementById("author") = "Auteur inconnu";
      } else {
        document.getElementById("author").textContent = allQuotes.author;
      }
    })
}
changeQuote();

document.getElementById("button").addEventListener("click", changeQuote);