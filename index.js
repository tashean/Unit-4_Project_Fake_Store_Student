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
}

fakestore("/category/electronics")

/* Assign */

/* Append */