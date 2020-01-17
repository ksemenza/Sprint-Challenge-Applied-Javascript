// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsEntry = document.querySelector('.topics')




function topicCreator(obj) {

    //TAB EL CREATED
    const topicTab = document.createElement('div')
    //CLASS NAME
    topicTab.className = ('tab')
    topicTab.textContent = obj
    topicsEntry.append(topicTab)
    return topicTab
}



axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
//   console.log(response.data.topics);
response.data.topics.forEach(arg => {



topicsEntry.append(topicCreator(arg));
console.log(arg)


  })
})
.catch( error => {
  console.log("data return topic", error)
})
