// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
 
function Header() {
    //HEADER EL
    const header = document.createElement('div')
    header.className = ('header')

    //DATE EL SPAN
    const dateSpan = document.createElement('span')
    dateSpan.className =('date')
    dateSpan.textContent = 'MARCH 28, 2019'
    //APPEND
    header.appendChild(dateSpan)

    //H1 EL
    const headerH1 =  document.createElement('h1')
    headerH1.className = ('header-h1')
    headerH1.textContent = 'Lambda Times'
    //APPEND
    header.appendChild(headerH1)

    //TEMP EL SPAN
    const tempSpan = document.createElement('span')
    tempSpan.className= ('temp-span')
    tempSpan.textContent = '98°'
    //APPEND
    header.appendChild(tempSpan)

    //RETURN HEADER
    return header
}


//ATTACH HEADER() TO DOM
let headerCta = document.querySelector('.header-container')
headerCta.appendChild(Header())
