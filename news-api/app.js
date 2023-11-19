const key = "eb6a30fccc8e4c81a9bd5ce286c876a7"
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`

const recievedNews = (newsdata) => {
  const articlesDiv = document.querySelector(".articles")
  newsdata.articles.forEach((article) => {

    const div = document.createElement("div")
    div.className = "news"
    div.innerHTML = `
			<h2>${article.title}</h2>
			<img src="${article.urlToImage}"/>`
    articlesDiv.appendChild(div)

  })
}

fetch(url)
  .then(response => response.json())
  .then(recievedNews)
