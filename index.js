/* Global Variables */
const electronics = document.getElementById("electronics");
const women = document.getElementById("women");
const men = document.getElementById("men");
const jewelry = document.getElementById("jewelry");

const display = document.getElementById("display");
const baseurl = "https://fakestoreapi.com/products";

/* Async Function */
const fakestore = async (endpoint) => {
    let response = await fetch(`${baseurl}${endpoint}`)
    let results = await response.json()
    console.log(results);
    displaycards(results);
}

// fakestore("/category/electronics")

/* Assign */
window.onload = (event) => {
    fakestore("");
}

electronics.addEventListener('click' , ( ) => {
    fakestore("/category/electronics")
}) 

women.addEventListener("click", (   ) => {
    fakestore("/category/woman's clothing")
} )

men.addEventListener("click" , ( ) => {
    fakestore("category/men's clothing")
})

jewelry.addEventListener("click", ( ) => {
    fakestore("category/jewelry")
})

/* Append */


function displaycards ( productdata ) {
    productdata.forEach( product => {
        
    let p = document.createElement("p")
    p.innerText = product.description
    let image = document.createElement("img")
    image.src= product.image
    let heading = document.createElement("h2")
    heading.innerText = product.title
    let card = document.createElement("div")
    let price = document.createElement("h3")
    heading.innerText = product.price
    card.appendChild(image)
    card.appendChild(heading)
    card.appendChild(price)
    card.appendChild(p)        
    display.appendChild(card) 
    } )  
}
