cakeUrl = 'http://localhost:3000/cakes';
const cakeName = document.getElementById('cake-name');
const cakeImage = document.getElementById('cake-image');
const cakeDescription = document.getElementById('cake-description');
const reviewForm = document.getElementById('description-form');
const reviewList = document.getElementById('review-list');
const cakeList = document.querySelectorAll('.fun');

document.addEventListener("DOMContentLoaded", () => {
    seeCakeDetails()
})

function seeCakeDetails(cake){
    fetch(cakeUrl)
    .then(res => res.json())
    .then(data => {
        loopThroughCake(data)
        cakeName.innerHTML = data[0].name
        cakeImage.src = data[0]["image_url"]
        cakeDescription.innerHTML = data[0].description
        reviewForm.innerHTML = data[0].reviews
    })
}

function loopThroughCake(cake){
    cake.forEach(item => 
        // // console.log(cake))
        // cakeList.innerHTML = item.name)
        addCakesToNavBar(item)
)}
        
        // addCakesToNavBar(item))

function addCakesToNavBar(cakes){ 
let cake = document.querySelectorAll('.fun')
cakes.forEach(item => {
console.log(cakes)
    cake[0].innerHTML = cakes.name
    cake[1].innerHTML = cakes.name
    cake[2].innerHTML = cakes.name
})
}


document.getElementById('review-form').addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let newReview = document.createElement('li')
    // newReview.idName.add('review-list li')
    newReview = e.target.review.value
    reviewList.append(newReview)
    e.target.reset()
}