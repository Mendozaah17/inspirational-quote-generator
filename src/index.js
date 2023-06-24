const quoteText = document.getElementById('quote')
const author = document.getElementById('author')


const newQuote = async () => {
  let url = 'https://type.fit/api/quotes'

  const response = await fetch(url);


  const allQuotes = await response.json();

  const indx = Math.floor(Math.random() * allQuotes.length);

  const quote = allQuotes[indx].text;
  const auth = allQuotes[indx].author;

  if (auth == null) {
    author = "Anonymous";
  }

  quoteText.textContent = quote;
  author.textContent = '~ ' + auth

}