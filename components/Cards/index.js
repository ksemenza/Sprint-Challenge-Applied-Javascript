// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.




/**
 * El created
 * Added class name
 * Content implemented
 * Append to DOM
*/


const cardEntry = document.querySelector('.cards-container')

function cardCreator(obj) {
    //CARD EL CREATED
    const card = document.createElement('div')
    card.classList.add = ('card')
    card.className = ('card')

    //HEADLINE EL CREATED
    const headline = document.createElement('div')
    // headline.classList.add = ('headline')
    headline.className = ('headline')
    headline.textContent = obj.authorName
    card.append(headline)

    //AUTHOR EL CREATED
    const author = document.createElement('div')
    author.className = ('author')  
    card.append(author)

    //IMG CTA EL CREATED
    const imgCta = document.createElement('div')
    imgCta.className =('img-container')
    author.append(imgCta)

    //IMG SRC CREATED
    const imgSrc = document.createElement('img')
    imgSrc.src = obj.authorPhoto
    imgCta.append(imgSrc)

    const authNameSpan = document.createElement('span')
    // authNameSpan.classList.add = ('auth-name-span')
    authNameSpan.className = ('auth-name-span')


    authNameSpan.textContent = `By ${obj.authorName}`
    author.append(authNameSpan)

    //RETURNS CARD TO IMPLEMENT ON DOM
    return card
}




axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
  console.log(response);

  
const js = response.data.articles.javascript
const tech = response.data.articles.technology
const jquery = response.data.articles.jquery
const node = response.data.articles.node
console.log(node)

js.forEach(arg => {
    cardEntry.append(cardCreator(arg))
  })

  tech.forEach(arg => {
      cardEntry.append(cardCreator(arg))
  })

  jquery.forEach(arg => {
      cardEntry.append(cardCreator(arg))
  })

console.log(jquery)

  node.forEach(arg => {
      cardEntry.append(cardCreator(arg))
  })

console.log(node)

})
.catch( error => {
  console.log("data return topic", error)
})




